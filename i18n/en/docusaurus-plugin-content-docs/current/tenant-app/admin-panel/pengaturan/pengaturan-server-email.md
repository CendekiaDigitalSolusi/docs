---
sidebar_position: 4
---

# Email Server Settings

The **Email Server Settings** page determines the email server that the application uses to send automatic emails.

Automated emails are used for:
- Reset password
- System notifications
- Delivery of specific modules
- Confirm account

:::warning
**Important:** Do not fill in original credentials. If the configuration is incorrect, features that require email will fail and users will not receive important emails.
:::

## How to Access

1. Entered into [Admin Dashboard](../dashboard-admin.md)
2. Open menu **Admin → Settings → Email Server Settings**

## Available Fields

The contents follow the data from the SMTP (Simple Mail Transfer Protocol) provider you use.

### Mailer / Shipping Type
Type of email sending protocol. Here the **SMTP** option is usually selected.

### Host / SMTP Server Address
The SMTP server address of your provider. Common examples:

- `smtp.mailtrap.io`(for testing)
- `smtp.gmail.com`(Gmail)
- `smtp.office365.com`(Microsoft)
- `smtp.zoho.com`(Zoho)
- `mail.sekolah.com`(Custom email server)

### Port / SMTP Ports
The port used for SMTP connections. Frequently used ports:

- `25`(rarely recommended, often blocked)
- `465`(SSL - full encryption)
- `587`(TLS - encryption and authentication)
- `2525`(sometimes for testing)

:::tip
Contact your email provider to find out the correct port for your configuration.
:::

### SMTP Username / Username
Username of your SMTP account. Usually in the form of:

- Complete email address (example: admin@school.com)
- Provider's specific username

### SMTP Password
Password for your SMTP account.

:::warning
Make sure you use the correct password. Some providers require a special password for SMTP (different from the web login password).
:::

### From Address / Sender's Address
The email address that will be displayed as the automatic email sender.

Example:`noreply@sekolah.com`

## Popular Configurations

### Gmail

```
Host: smtp.gmail.com
Port: 587
Username: your.email@gmail.com
Password: [App Password - bukan password biasa]
```

:::info
For Gmail, you need [membuat App Password](https://myaccount.google.com/apppasswords) separately, instead of using the usual login password.
:::

### Zoho Mail

```
Host: smtp.zoho.com
Port: 465
Username: your.email@zoho.com
Password: Your Zoho Password
```

## Testing Emails

After configuration, some systems provide a **Test Email** button to ensure the configuration is working properly.

1. Click the **Test Email** button
2. Enter the recipient's email for testing
3. Check your email to make sure it was sent

## Troubleshooting

**Email not sent:**
- Check host configuration, port, username, password
- Make sure the SMTP account is valid and still active
- Check whether the firewall/network is blocking the SMTP port

**Incoming spam email:**
- Configure SPF, DKIM, DMARC records in DNS
- Use an official email domain, not a generic domain

**Authentication error:**
- Verify username and password once again
- For Gmail, use the App Password, not the regular password
