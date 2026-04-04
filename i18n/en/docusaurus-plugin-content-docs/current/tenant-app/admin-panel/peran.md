---
sidebar_position: 3
---

# Roles / Access Rights

The **Role** page is used to set user roles in the application. Roles determine what menus and actions the user can access.

## How to Access

1. Entered into [Admin Dashboard](./dashboard-admin.md)
2. Open menu **Admin → Roles**

## Role Page Elements

### Toolbar on Top of Table

- **"Add New" button**: Creates a new role
- **Dropdown "Action"**: Performs a bulk action for selected data
- **"Columns" Dropdown**: Sets which columns are displayed
- **Number of rows dropdown**: Set how much data per page
- **Search Column**: Search for roles by name or description

### Role Table

Displays a list of roles with columns:

| Column | Description |
|-------|-----------|
| **Name** | Role name (example: Administrator, Teacher, Student) |
| **Description** | Brief explanation of role functions |
| **Action** | Edit and Delete Buttons |

## Adding New Roles

1. Click the **Add New** button
2. Fill in the form:
   - **Role Name**: Easy to understand name (example: "Grade 1 Teacher", "Treasurer")
   - **Description**: A brief description of this role (optional)
3. Select the permissions required for this role from the list provided
4. Click **Save**

:::tip
Use role names that are descriptive and easy to understand. Avoid names that are too common or confusing.
:::

## Changing (Edit) Roles

1. Search for the role you want to change
2. Click the **Edit** button (pencil icon) on the role row
3. Change the name, description, or access rights as needed
4. Click **Save**

## Deleting a Role

1. Search for the role you want to delete
2. Click the **Delete** button (trash icon)
3. Confirm deletion

:::warning
Be careful when deleting roles. Make sure there are no users still using the role.
:::

## Best Practices

- Create roles based on function/position in the school
- Set access rights according to minimum requirements (Principle of Least Privilege)
- Document each role and responsibility
- Review access rights periodically for security
