#!/usr/bin/env python3
import re
from pathlib import Path
from deep_translator import GoogleTranslator

ROOTS = [
    Path("i18n/en/docusaurus-plugin-content-docs/current"),
    Path("i18n/en/docusaurus-plugin-content-docs-ssoCds/current"),
]

translator = GoogleTranslator(source="id", target="en")


def should_translate_text(text: str) -> bool:
    stripped = text.strip()
    if not stripped:
        return False
    if re.fullmatch(r"[-=*_`~|:]+", stripped):
        return False
    # Skip pure urls
    if re.fullmatch(r"https?://\S+", stripped):
        return False
    # Only bother translating lines that look like sentence text.
    return bool(re.search(r"[A-Za-zÀ-ÿ]", stripped))


def safe_translate(text: str) -> str:
    if not should_translate_text(text):
        return text
    try:
        return translator.translate(text)
    except Exception:
        return text


def translate_inline(text: str) -> str:
    # Preserve inline code snippets.
    parts = re.split(r"(`[^`]*`)", text)
    out = []
    for part in parts:
        if part.startswith("`") and part.endswith("`"):
            out.append(part)
        else:
            out.append(safe_translate(part))
    return "".join(out)


def translate_content(content: str) -> str:
    lines = content.splitlines()
    out_lines = []

    in_frontmatter = False
    frontmatter_done = False
    in_code = False

    for i, line in enumerate(lines):
        # YAML frontmatter handling
        if i == 0 and line.strip() == "---":
            in_frontmatter = True
            out_lines.append(line)
            continue

        if in_frontmatter:
            if line.strip() == "---":
                in_frontmatter = False
                frontmatter_done = True
                out_lines.append(line)
                continue

            m = re.match(r"^(\s*)(title|description)\s*:\s*(.*)$", line)
            if m:
                indent, key, value = m.groups()
                translated = safe_translate(value)
                out_lines.append(f"{indent}{key}: {translated}")
            else:
                out_lines.append(line)
            continue

        if line.strip().startswith("```"):
            in_code = not in_code
            out_lines.append(line)
            continue

        if in_code:
            out_lines.append(line)
            continue

        # Keep blockquotes/lists/headings prefix intact
        prefix_match = re.match(r"^(\s*(?:>\s+|#{1,6}\s+|[-*+]\s+|\d+\.\s+)?)", line)
        prefix = prefix_match.group(1) if prefix_match else ""
        body = line[len(prefix):]

        if not should_translate_text(body):
            out_lines.append(line)
            continue

        # Translate markdown links while preserving URLs
        chunks = re.split(r"(\[[^\]]+\]\([^\)]+\))", body)
        translated_chunks = []
        for chunk in chunks:
            link_match = re.match(r"^\[([^\]]+)\]\(([^\)]+)\)$", chunk)
            if link_match:
                text, url = link_match.groups()
                translated_text = translate_inline(text)
                translated_chunks.append(f"[{translated_text}]({url})")
            else:
                translated_chunks.append(translate_inline(chunk))

        out_lines.append(prefix + "".join(translated_chunks))

    return "\n".join(out_lines) + ("\n" if content.endswith("\n") else "")


def main():
    files = []
    for root in ROOTS:
        files.extend(root.rglob("*.md"))
        files.extend(root.rglob("*.mdx"))

    for file in files:
        original = file.read_text(encoding="utf-8")
        translated = translate_content(original)
        if translated != original:
            file.write_text(translated, encoding="utf-8")
            print(f"translated: {file}")


if __name__ == "__main__":
    main()
