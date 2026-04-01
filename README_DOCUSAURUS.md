# Dokumentasi Cendekia - Docusaurus Edition

Dokumentasi lengkap untuk produk Cendekia Platform, kini dibangun dengan **Docusaurus**.

## 🚀 Quick Start

### Instalasi Dependencies
```bash
npm install
```

### Development Server
```bash
npm start
```
Website akan buka di `http://localhost:3000`

### Build untuk Production
```bash
npm run build
```
Output ada di folder `/build`

### Serve Build Locally
```bash
npm run serve
```

## 📚 Struktur Dokumentasi

```
docs/
├── intro.md                    # Halaman utama
├── central-app/               # Dokumentasi Aplikasi Central
│   ├── intro.md
│   ├── memulai.md
│   ├── autentikasi/
│   └── dasar/
├── tenant-app/                # Dokumentasi Aplikasi Tenant
│   ├── intro.md
│   ├── autentikasi/
│   ├── user-panel/
│   ├── admin-panel/
│   │   ├── blog/
│   │   ├── tampilan/
│   │   └── pengaturan/
│   └── ...
└── help-center/               # Pusat Bantuan
    ├── faq.md
    └── troubleshooting.md
```

## 🔧 Konfigurasi

- **Language**: Bahasa Indonesia (id)
- **Production URL**: https://docs.cendekiadigitalsolusi.co.id
- **Theme**: Docusaurus Classic Theme
- **Versions**: Single version (non-versioned)

## 📝 Menulis Dokumentasi

Setiap file markdown harus memiliki frontmatter:

```yaml
---
sidebar_position: 1
---

# Judul Halaman

Konten Anda di sini...
```

### Admonitions (Callout Boxes)

```markdown
:::info
Informasi penting di sini
:::

:::warning
Peringatan penting
:::

:::tip
Tips atau saran berguna
:::

:::danger
Peringatan kritis
:::
```

### Links

```markdown
- Internal: [Link teks](../path/to/file.md)
- External: [Link teks](https://example.com)
```

### Code Blocks

```markdown
\`\`\`python
print("Hello World")
\`\`\`

\`\`\`bash
npm run build
\`\`\`
```

## 🌐 Deployment

### Option 1: GitHub Pages (Recommended)

1. Push ke GitHub
2. Setup GitHub Actions untuk auto-deploy
3. Configure custom domain di repository settings

### Option 2: Vercel

1. Connect GitHub repository ke Vercel
2. Set build command: `npm run build`
3. Set output directory: `build`

### Option 3: Netlify

1. Connect GitHub ke Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`

### Option 4: Self-hosted

1. Run `npm run build`
2. Deploy folder `/build` ke server
3. Setup web server (nginx/Apache)

## 🎨 Customization

### Mengubah Warna Tema
Edit `src/css/custom.css` untuk mengubah color scheme.

### Menambah Navbar Items
Edit `docusaurus.config.js` di bagian `navbar.items`.

### Mengubah Logo
Ganti file di `/static/img/logo.svg`

## 📊 Analytics (Optional)

Untuk menambahkan Google Analytics:

Edit `docusaurus.config.js`:
```javascript
plugins: [
  ['@docusaurus/plugin-google-analytics', { trackingID: 'UA-' }],
],
```

## 🤝 Kontribusi

Untuk update dokumentasi:
1. Edit markdown files di folder `/docs`
2. Test locally dengan `npm start`
3. Commit dan push ke repository

## ⚠️ Important Notes

- Sidebar otomatis di-generate dari folder structure
- Gunakan `sidebar_position` untuk ordering di dalam folder
- Jangan hapus file yang masih di-reference
- Test build sebelum push: `npm run build`

## 📞 Support

- 📧 Email: support@cendekiadigitalsolusi.co.id
- 🌐 Website: https://cendekiadigitalsolusi.co.id
- 📚 Docusaurus Docs: https://docusaurus.io

## 📝 Lisensi

Copyright © 2026 PT Cendekia Digital Solusi. All rights reserved.

---

**Dibangun dengan ❤️ menggunakan [Docusaurus](https://docusaurus.io/)**
