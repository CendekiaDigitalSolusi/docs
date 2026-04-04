---
sidebar_position: 4
---

# Category

Categories are used to group blog content. Think of categories like “bookshelf” for news and articles.

## How to Access

1. Entered into [Admin Dashboard](../dashboard-admin.md)
2. Open menu **Admin → Blog → Categories**

## Category Page Elements

**Toolbar above the table:**
- **"Add New" button**: Creates a new category
- **"Search" box**: Filter categories by name
- **Action Dropdown**: Bulk actions for selected categories
- **Column Dropdown**: Set which columns are displayed
- **Number of rows dropdown**: Set how much data per page

**Table column:**
- **Name** - User visible name of the category
- **Slug** - A neat version of the URL (example:`pengumuman`)
- **Description** - A brief description of the category
- **Action** - Edit/Delete button

## Important Concept: Name vs Slug

- **Name**: User visible text (example: "Announcement")
- **Slug**: The neat version of the URL without spaces (example: "announcement")

:::warning
Avoid changing the **slug** of categories that are already used by many articles, because changing the slug can affect links that are already spread or indexed in search engines.
:::

## Create a New Category

1. Click the **Add New** button
2. Fill out the form:
   - **Name**: The name of the category you want to create
   - **Slug**: URL slug (usually automatically from the name)
   - **Description**: A brief description of the category (optional)
3. Click **Save**

## Changing Category

1. Find the category you want to change
2. Click the **Edit** button on the category row
3. Change the name/description as needed
4. Click **Save**

## Deleting Categories

1. Find the category you want to delete
2. Click the **Delete** button on the category row
3. Confirm deletion

:::info
If the category is still used by the article, consider changing the article to another category before deleting the category.
:::

## Tips

- Create categories that are clear and easy to understand
- Avoid creating too many categories
- Use consistent category names
- Maintain standard category slugs
