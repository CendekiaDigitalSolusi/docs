---
icon: sliders
---

# Pengaturan Umum

**Pengaturan Umum** adalah pusat konfigurasi dasar website sekolah. Di sini kamu mengatur identitas brand, SEO dasar, zona waktu, dan reCAPTCHA.

***

### Bagian SEO (Meta)

SEO di sini sifatnya “pondasi”. Tidak perlu panjang. Yang penting rapi dan relevan.

#### Meta Deskripsi

Isi deskripsi singkat tentang sekolah/website. Biasanya muncul sebagai preview di mesin pencari.

Saran isi:

* 1–2 kalimat
* jelaskan sekolah + keunggulan utama
* hindari keyword stuffing

Contoh format:

> Sekolah Digital menyediakan informasi profil sekolah, program, dan berita terbaru. Akses layanan akademik dan pembelajaran daring dengan mudah.

#### Meta Kata Kunci

Isi daftar kata kunci yang menggambarkan sekolah. Pisahkan dengan koma.

Contoh:

`Sekolah Digital, Profil Sekolah, PPDB, Berita Sekolah, LMS, Akademik`

{% hint style="info" %}
Meta keyword tidak selalu berpengaruh besar di SEO modern. Tetap isi secukupnya untuk konsistensi metadata.
{% endhint %}

***

### Identitas visual (Logo & Favicon)

Di layar ini ada 4 jenis logo + favicon.

#### Logo (Tampilan Terang)

Dipakai saat background header terang. Klik **Unggah** untuk mengganti.

#### Logo (Tampilan Gelap)

Dipakai saat background header gelap. Klik **Unggah** untuk mengganti.

#### Logo Pendek (Tampilan Terang)

Versi ikon/singkat. Biasanya tampil di area sempit atau mode mobile.

#### Logo Pendek (Tampilan Gelap)

Versi ikon/singkat untuk background gelap.

#### Favicon

Ikon kecil di tab browser. Biasanya format PNG/ICO/SVG (tergantung sistem).

{% hint style="success" %}
Gunakan file **SVG** atau **PNG resolusi tinggi** agar logo tidak pecah. Pastikan versi gelap/terang tetap terbaca.
{% endhint %}

{% hint style="warning" %}
Setelah ganti logo atau favicon, cek di browser incognito. Favicon sering tersimpan di cache.
{% endhint %}

***

### Zona Waktu

Field **Zona Waktu** menentukan:

* waktu tampil di berita/halaman
* timestamp komentar
* waktu proses sistem yang mengikuti jam lokal

Untuk sekolah di Indonesia, umumnya:

* `Asia/Jakarta` (WIB)
* `Asia/Makassar` (WITA)
* `Asia/Jayapura` (WIT)

***

### Keamanan (reCAPTCHA)

Bagian ini dipakai untuk mengurangi spam di form publik.

#### Penyedia Recaptcha

Tersedua opsi **Google Recaptcha v2, Google Recaptcha v3, hCaptcha, Cloudflare Turnstile**.

#### Recaptcha Aktif

* **Tidak**: reCAPTCHA dimatikan.
* **Ya** (atau setara): reCAPTCHA aktif di form yang didukung.

#### Kunci Situs Recaptcha

Ini public key dari masing-masing provider.

#### Kunci Rahasia Recaptcha

Ini secret key. Simpan baik-baik. Jangan dibagikan.

{% hint style="danger" %}
Jangan tempel secret key di tempat publik. Secret key hanya untuk konfigurasi admin.
{% endhint %}

***

### Simpan perubahan

Setelah mengubah pengaturan apa pun:

1. Scroll ke bawah.
2. Klik tombol **Simpan**.

Kalau kamu pindah halaman tanpa simpan, perubahan bisa hilang.

***

### Troubleshooting

#### Logo sudah diganti, tapi belum berubah di website

* Refresh halaman publik.
* Coba hard refresh (Ctrl+F5).
* Coba mode incognito.

#### reCAPTCHA tidak muncul

* Pastikan **Recaptcha Aktif** sudah dinyalakan.
* Pastikan **Kunci Situs** dan **Kunci Rahasia** terisi.
* Pastikan domain sudah terdaftar di pengaturan reCAPTCHA Google.

#### Jam posting tidak sesuai

* Pastikan **Zona Waktu** sudah benar.
* Simpan, lalu cek lagi di halaman publik.
