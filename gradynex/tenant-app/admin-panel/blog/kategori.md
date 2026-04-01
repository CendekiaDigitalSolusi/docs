---
sidebar_position: 4
---

# Kategori

Kategori digunakan untuk mengelompokkan konten blog. Pikirkan kategori seperti "rak buku" untuk berita dan artikel.

## Cara Mengakses

1. Masuk ke [Dashboard Admin](../dashboard-admin.md)
2. Buka menu **Admin → Blog → Kategori**

## Elemen Halaman Kategori

**Toolbar di atas tabel:**
- **Tombol "Tambah Baru"**: Membuat kategori baru
- **Kotak "Cari"**: Menyaring kategori berdasarkan nama
- **Dropdown Aksi**: Aksi massal untuk kategori yang dipilih
- **Dropdown Kolom**: Atur kolom mana yang ditampilkan
- **Dropdown jumlah baris**: Atur berapa banyak data per halaman

**Kolom tabel:**
- **Nama** - Nama kategori yang terlihat oleh pengguna
- **Slug** - Versi URL yang rapi (contoh: `pengumuman`)
- **Deskripsi** - Penjelasan singkat tentang kategori
- **Aksi** - Tombol Edit/Hapus

## Konsep Penting: Nama vs Slug

- **Nama**: Teks yang terlihat oleh pengguna (contoh: "Pengumuman")
- **Slug**: Versi URL yang rapi tanpa spasi (contoh: "pengumuman")

:::warning
Hindari mengubah **slug** kategori yang sudah dipakai banyak artikel, karena perubahan slug dapat mempengaruhi tautan yang sudah tersebar atau terindeks di mesin pencari.
:::

## Membuat Kategori Baru

1. Klik tombol **Tambah Baru**
2. Isi formulir:
   - **Nama**: Nama kategori yang ingin dibuat
   - **Slug**: URL slug (biasanya otomatis dari nama)
   - **Deskripsi**: Penjelasan singkat tentang kategori (opsional)
3. Klik **Simpan**

## Mengubah Kategori

1. Cari kategori yang ingin diubah
2. Klik tombol **Edit** pada baris kategori
3. Ubah nama/deskripsi sesuai kebutuhan
4. Klik **Simpan**

## Menghapus Kategori

1. Cari kategori yang ingin dihapus
2. Klik tombol **Hapus** pada baris kategori
3. Konfirmasi penghapusan

:::info
Jika kategori masih digunakan oleh artikel, pertimbangkan untuk mengubah artikel tersebut ke kategori lain sebelum menghapus kategori.
:::

## Tips

- Buat kategori yang jelas dan mudah dipahami
- Hindari membuat terlalu banyak kategori
- Gunakan nama kategori yang konsisten
- Pertahankan slug kategori yang sudah standar
