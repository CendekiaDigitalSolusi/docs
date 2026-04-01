---
sidebar_position: 4
---

# Pengaturan Server Email

Halaman **Pengaturan Server Email** menentukan server email yang dipakai aplikasi untuk mengirim email otomatis.

Email otomatis digunakan untuk:
- Reset password
- Notifikasi sistem
- Pengiriman dari modul tertentu
- Konfirmasi akun

:::warning
**Penting:** Jangan isi kredensial asal. Jika konfigurasi salah, fitur yang membutuhkan email akan gagal dan pengguna tidak akan menerima email penting.
:::

## Cara Mengakses

1. Masuk ke [Dashboard Admin](../dashboard-admin.md)
2. Buka menu **Admin → Pengaturan → Pengaturan Server Email**

## Field yang Tersedia

Isi mengikuti data dari penyedia SMTP (Simple Mail Transfer Protocol) yang Anda gunakan.

### Mailer / Jenis Pengiriman
Jenis protokol pengiriman email. Di sini biasanya pilihan **SMTP**.

### Host / Alamat Server SMTP
Alamat server SMTP dari penyedia Anda. Contoh yang umum:

- `smtp.mailtrap.io` (untuk testing)
- `smtp.gmail.com` (Gmail)
- `smtp.office365.com` (Microsoft)
- `smtp.zoho.com` (Zoho)
- `mail.sekolah.com` (Server email custom)

### Port / Port SMTP
Port yang digunakan untuk koneksi SMTP. Port yang sering dipakai:

- `25` (jarang direkomendasikan, sering diblokir)
- `465` (SSL - enkripsi penuh)
- `587` (TLS - enkripsi dan autentikasi)
- `2525` (kadang untuk testing)

:::tip
Hubungi penyedia email Anda untuk mengetahui port yang tepat untuk konfigurasi Anda.
:::

### Nama Pengguna / Username SMTP
Username dari akun SMTP Anda. Biasanya berupa:

- Alamat email lengkap (contoh: admin@sekolah.com)
- Username khusus dari penyedia

### Kata Sandi / Password SMTP
Password untuk akun SMTP Anda.

:::warning
Pastikan Anda menggunakan password yang benar. Beberapa penyedia memerlukan password khusus untuk SMTP (berbeda dari password login web).
:::

### From Address / Alamat Pengirim
Email address yang akan ditampilkan sebagai pengirim email otomatis.

Contoh: `noreply@sekolah.com`

## Konfigurasi Populer

### Gmail

```
Host: smtp.gmail.com
Port: 587
Username: your.email@gmail.com
Password: [App Password - bukan password biasa]
```

:::info
Untuk Gmail, Anda perlu [membuat App Password](https://myaccount.google.com/apppasswords) terpisah, bukan menggunakan password login biasa.
:::

### Zoho Mail

```
Host: smtp.zoho.com
Port: 465
Username: your.email@zoho.com
Password: Your Zoho Password
```

## Testing Email

Setelah konfigurasi, beberapa sistem menyediakan tombol **Test Email** untuk memastikan konfigurasi bekerja dengan baik.

1. Klik tombol **Test Email**
2. Masukkan email penerima untuk testing
3. Cek email Anda untuk memastikan email terkirim

## Troubleshooting

**Email tidak terkirim:**
- Periksa konfigurasi host, port, username, password
- Pastikan account SMTP valid dan masih aktif
- Cek firewall/network apakah memblokir port SMTP

**Email masuk spam:**
- Konfigurasi SPF, DKIM, DMARC records di DNS
- Gunakan domain email resmi, bukan domain generic

**Authentication error:**
- Verify username dan password sekali lagi
- Untuk Gmail, gunakan App Password, bukan password biasa
