---
sidebar_position: 3
---

# Peran / Hak Akses

Halaman **Peran** digunakan untuk mengatur role (peran) pengguna di aplikasi. Peran menentukan menu dan aksi apa saja yang dapat diakses oleh pengguna.

## Cara Mengakses

1. Masuk ke [Dashboard Admin](./dashboard-admin.md)
2. Buka menu **Admin → Peran**

## Elemen Halaman Peran

### Toolbar di Atas Tabel

- **Tombol "Tambah Baru"**: Membuat peran baru
- **Dropdown "Aksi"**: Melakukan aksi massal untuk data yang dipilih
- **Dropdown "Kolom"**: Mengatur kolom mana saja yang ditampilkan
- **Dropdown jumlah baris**: Mengatur berapa banyak data per halaman
- **Kolom Cari**: Mencari peran berdasarkan nama atau deskripsi

### Tabel Peran

Menampilkan daftar peran dengan kolom:

| Kolom | Keterangan |
|-------|-----------|
| **Nama** | Nama peran (contoh: Administrator, Guru, Siswa) |
| **Deskripsi** | Penjelasan singkat fungsi peran |
| **Aksi** | Tombol Edit dan Hapus |

## Menambah Peran Baru

1. Klik tombol **Tambah Baru**
2. Isi form:
   - **Nama Peran**: Nama yang mudah dipahami (contoh: "Guru Kelas 1", "Bendahara")
   - **Deskripsi**: Penjelasan singkat tentang peran ini (opsional)
3. Pilih hak akses yang dibutuhkan untuk peran ini dari daftar yang tersedia
4. Klik **Simpan**

:::tip
Gunakan nama peran yang deskriptif dan mudah dipahami. Hindari nama yang terlalu umum atau membingungkan.
:::

## Mengubah (Edit) Peran

1. Cari peran yang ingin diubah
2. Klik tombol **Edit** (ikon pensil) pada baris peran
3. Ubah nama, deskripsi, atau hak akses sesuai kebutuhan
4. Klik **Simpan**

## Menghapus Peran

1. Cari peran yang ingin dihapus
2. Klik tombol **Hapus** (ikon sampah)
3. Konfirmasi penghapusan

:::warning
Hati-hati saat menghapus peran. Pastikan tidak ada pengguna yang masih menggunakan peran tersebut.
:::

## Best Practices

- Buat peran berdasarkan fungsi/posisi di sekolah
- Atur hak akses sesuai dengan kebutuhan minimal (Principle of Least Privilege)
- Dokumentasikan setiap peran dan tanggung jawabnya
- Review hak akses secara berkala untuk keamanan
