---
sidebar_position: 3
---

# Pengaturan Diskusi

**Pengaturan Diskusi** mengatur komentar pada artikel blog. Pengaturan ini menjadi **default untuk artikel baru**.

Artikel yang sudah dibuat sebelumnya dapat memiliki pengaturan sendiri yang berbeda.

## Cara Mengakses

1. Masuk ke [Dashboard Admin](../../dashboard-admin.md)
2. Buka menu **Admin → Pengaturan → Blog → Pengaturan Diskusi**

## Pengaturan yang Tersedia

### 1. Izinkan Orang Mengirim Komentar pada Artikel Baru

Jika **aktif**: Artikel baru akan **menerima komentar** dari pengunjung
- Kolom/form komentar akan tersedia di bawah artikel
- Pengunjung dapat meninggalkan feedback/tanggapan

Jika **nonaktif**: Artikel baru **tidak menerima komentar** secara default
- Kolom komentar akan dimatikan
- Pengunjung tidak bisa mengirim komentar

:::info
Perubahan di sini hanya berlaku untuk **artikel baru**. Artikel lama tetap mengikuti setting lamanya. Anda bisa mengubah per artikel jika diperlukan.
:::

### 2. Mewajibkan Pengguna Untuk Masuk Sebelum Mengirim Komentar

Jika **aktif**: Hanya pengguna yang sudah login yang bisa mengirim komentar
- Efektif untuk mengurangi spam dari bot/anonymous
- Lebih terkontrol dari sisi moderasi

Jika **nonaktif**: Siapa saja bisa mengirim komentar (jika tidak ada verifikasi lain)
- Lebih terbuka, tapi rentan spam

:::warning
Untuk website publik sekolah, sebaiknya aktifkan setting ini untuk mengurangi spam dan komentar tidak pantas.
:::

### 3. Tutup Komentar Artikel Lama Secara Otomatis

Jika **aktif**: Komentar akan ditutup otomatis untuk artikel yang sudah mencapai batas usia tertentu.

**Pengaturan terkait:**
- **Tutup komentar untuk artikel yang lebih lama dari (X) hari**
- Isi angka jumlah hari

**Contoh:**
- Jika diisi `14`, artikel yang dibuat lebih dari 14 hari yang lalu tidak menerima komentar baru
- Komentar lama tetap terlihat, hanya tidak bisa ditambah komentar baru

**Saran nilai:**
- `7–14` hari untuk berita/pengumuman yang cepat berubah
- `30–90` hari untuk artikel evergreen/abadi (seperti panduan, FAQ)
- `0` atau tidak aktif jika ingin semua artikel tetap bisa menerima komentar

:::warning
Fitur ini bagus untuk mengurangi spam pada artikel lama. Tapi pastikan tidak mengganggu diskusi yang masih relevan dan perlu feedback.
:::

## Tips

- **Moderasi komentar** - Aktifkan moderasi agar komentar tidak langsung tampil tanpa review
- **Balance antara terbuka & aman** - Izinkan komentar tapi dengan verifikasi login untuk keamanan
- **Atur batas waktu dengan bijak** - Jangan tutup komentar terlalu cepat untuk artikel penting
- **Review komentar berkala** - Hapus spam dan komentar yang tidak pantas untuk menjaga kualitas diskusi
