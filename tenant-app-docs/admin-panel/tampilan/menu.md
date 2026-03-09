---
icon: bars
---

# Menu

Halaman **Menu** dipakai untuk mengatur navigasi website sekolah.\
Kamu bisa mengelola menu untuk **Header** dan **Footer** (atau varian lain yang tersedia di dropdown).

Kalau diibaratkan, ini adalah “peta jalan” pengunjung.

***

### Kenali dua mode utama

Di panel kanan ada dua tab:

* **Struktur Menu**: mengatur urutan dan hierarki item menu.
* **Kelola Menu**: mengelola daftar item menu (buat/edit/hapus).

{% hint style="info" %}
Biasanya kamu buat item dulu di **Kelola Menu**, lalu susun posisinya di **Struktur Menu**.
{% endhint %}

***

### Pilih menu yang ingin diedit

Di panel kiri, bagian **Pilih Menu**, pilih menu yang akan diedit.

Contoh yang sering ada:

* **Menu Header**
* **Menu Footer**

Tombol yang tersedia:

* **Tambah Baru**: membuat set menu baru.
* **Ubah**: mengganti nama/konfigurasi menu (jika tersedia).

***

### Menambah item menu

Kamu bisa menambah menu dari beberapa sumber. Di panel kiri biasanya tersedia grup:

* **Tautan** (link manual)
* **Halaman** (ambil dari daftar halaman statis)
* **Kategori** (ambil dari kategori blog)

#### A) Tautan (link manual)

Pakai ini kalau kamu mau:

* link ke situs luar
* link ke halaman internal dengan URL tertentu

Field yang biasanya ada:

* **URL**: contoh `/blog` atau `https://…`
* **Teks**: label yang tampil di menu, contoh `Blog`
* **Target**:
  * `'_self'` buka di tab yang sama
  * `'_blank'` buka tab baru

Klik **Simpan** untuk menambahkan item.

{% hint style="warning" %}
Untuk link internal, pakai URL relatif seperti `/blog`.\
Ini lebih aman saat domain berubah.
{% endhint %}

#### B) Halaman

Tambahkan menu yang mengarah ke halaman statis.

Cocok untuk:

* Tentang sekolah
* Kontak
* Profil

Lihat juga: [Halaman](../blog/halaman.md)

#### C) Kategori

Tambahkan menu berdasarkan kategori blog.

Cocok untuk:

* Pengumuman
* Kegiatan

Lihat juga: [Kategori](../blog/kategori.md)

***

### Menyusun struktur menu

Masuk tab **Struktur Menu**.

Di sini kamu akan melihat daftar item menu (mis. `BERANDA`, `BLOG`).

Yang biasanya bisa kamu lakukan:

* ubah urutan (drag & drop)
* membuat sub-menu dengan menggeser item ke kanan (jika didukung)

Terakhir, klik **Simpan**.

{% hint style="info" %}
Habis klik **Simpan**, cek tampilan publik.\
Pastikan urutan dan label sudah sesuai.
{% endhint %}

***

### Kelola menu (list item)

Masuk tab **Kelola Menu** untuk melihat daftar item yang sudah dibuat.

Biasanya tabel berisi:

* **Menu** (nama item)
* **URL**
* **Target** (`_self` / `_blank`)
* **Tipe** (Tautan/Halaman/Kategori)
* **Aksi** (Edit/Hapus)

Gunakan kolom **Cari** untuk menemukan item tertentu.

#### Edit item

1. Klik **Edit** (ikon pensil).
2. Ubah label, URL, atau target.
3. Simpan.

#### Hapus item

1. Klik **Hapus** (ikon tempat sampah).
2. Konfirmasi.

{% hint style="danger" %}
Kalau kamu hapus item yang sedang dipakai di **Struktur Menu**, navigasi publik bisa putus.
{% endhint %}

***

### Checklist sebelum publikasi

* [ ] Link internal pakai URL relatif (contoh `/blog`).
* [ ] Link eksternal pakai `target=_blank` jika perlu.
* [ ] Nama menu singkat (1–2 kata).
* [ ] Jangan terlalu banyak item di header.

### Troubleshooting

#### Menu tidak berubah di website

* Pastikan sudah klik **Simpan**.
* Refresh halaman publik.
* Coba bersihkan cache browser.

#### Menu tidak muncul

* Pastikan kamu mengedit set menu yang benar (Header vs Footer).
* Cek apakah tema/website memakai set menu tersebut.

#### Tidak bisa akses halaman Menu

Cek role/izin akun di [Hak Akses](../peran.md).
