---
icon: envelope
---

# Pengaturan Server Email

Pengaturan ini menentukan **server email** yang dipakai aplikasi untuk mengirim email otomatis. Contohnya: email reset password, notifikasi, dan pengiriman dari modul tertentu.

{% hint style="warning" %}
Jangan isi kredensial asal. Jika salah, fitur yang butuh email akan gagal.
{% endhint %}

***

### Field yang tersedia

Isi mengikuti data dari penyedia SMTP yang kamu pakai.

#### Mailer

Jenis pengiriman email. Di lampiran terlihat opsi **SMTP**.

#### Host

Alamat server SMTP. Contoh umum:

* `smtp.mailtrap.io` (testing)
* `smtp.gmail.com`
* `smtp.office365.com`
* `smtp.zoho.com`

#### Port

Port SMTP sesuai penyedia. Contoh yang sering dipakai:

* `25` (jarang direkomendasikan)
* `465` (SSL)
* `587` (TLS)
* `2525` (kadang untuk testing)

#### Nama Pengguna

Username SMTP. Biasanya berupa:

* alamat email lengkap, atau
* username khusus dari penyedia.

#### Kata Sandi

Password SMTP.

{% hint style="danger" %}
Jangan bagikan password SMTP. Kalau memakai Gmail/Office 365, biasanya perlu _app password_.
{% endhint %}

#### Enkripsi

Cara koneksi terenkripsi ke server SMTP. Opsi umum:

* **Tidak Ada**: tanpa enkripsi (hanya untuk kondisi tertentu)
* **SSL**
* **TLS**

{% hint style="warning" %}
Jika penyedia mendukung TLS/SSL, pilih itu. Enkripsi membuat kredensial tidak terkirim sebagai teks biasa.
{% endhint %}

#### Alamat Pengirim

Email yang akan tampil sebagai pengirim. Contoh: `noreply@sekolah.sch.id`.

{% hint style="info" %}
Idealnya domain pengirim sama dengan domain sekolah. Ini membantu deliverability dan mengurangi risiko masuk spam.
{% endhint %}

#### Nama Pengirim

Nama yang tampil di inbox penerima. Contoh: `Sekolah Digital`.

***

### Cara setup yang aman (rekomendasi)

{% stepper %}
{% step %}
#### 1) Siapkan kredensial SMTP

Ambil detail SMTP dari penyedia email sekolah. Biasanya berisi: host, port, enkripsi, username, password.
{% endstep %}

{% step %}
#### 2) Isi field sesuai penyedia

Masukkan data persis seperti di dashboard penyedia. Pastikan port dan enkripsi cocok.
{% endstep %}

{% step %}
#### 3) Set alamat pengirim

Gunakan alamat khusus seperti `noreply@...`. Nama pengirim isi nama sekolah.
{% endstep %}

{% step %}
#### 4) Simpan

Klik **Simpan**.
{% endstep %}
{% endstepper %}

***

### Cara mengetes konfigurasi

Cara paling mudah:

1. Simpan pengaturan SMTP.
2. Coba fitur yang mengirim email.
   * Misalnya dari flow [Lupa Kata Sandi](../../autentikasi/lupa-kata-sandi.md).
3. Pastikan email benar-benar masuk ke inbox.

{% hint style="info" %}
Kalau email masuk tapi sering ke folder spam, cek SPF/DKIM/DMARC domain. Biasanya ini diatur di DNS domain, bukan di halaman ini.
{% endhint %}

***

### Troubleshooting

#### Email tidak terkirim

* Cek **Host**, **Port**, dan **Enkripsi**.
* Pastikan **Nama Pengguna** dan **Kata Sandi** benar.
* Pastikan server SMTP tidak memblokir IP.

#### Gagal login SMTP

* Pastikan kredensial benar.
* Untuk Gmail/Office365, pakai **app password** jika MFA aktif.
* Pastikan akun SMTP tidak dibatasi kebijakan keamanan.

#### Email terkirim tapi tidak masuk

* Cek folder spam.
* Coba ganti **Alamat Pengirim** ke domain yang sama dengan sekolah.
* Pastikan DNS domain sudah punya SPF/DKIM (jika memakai domain sendiri).
