---
icon: comments
---

# Komentar

Komentar adalah tempat kamu mengelola tanggapan pengunjung pada **Berita** atau **Halaman**.

Tujuannya simpel:

* menjaga diskusi tetap sehat
* menghapus spam
* memantau masukan dari pembaca

### Gambaran layar (list komentar)

Di halaman ini kamu akan melihat tabel komentar.

Komponen yang tersedia:

* **Cari**: menyaring komentar.
* Dropdown **Aksi**, **Kolom**, dan jumlah baris (mis. **10**).
* Tabel dengan kolom:
  * **Penulis**: siapa yang menulis komentar.
  * **Komentar**: isi komentar.
  * **Created At**: waktu komentar dibuat.
  * **Aksi**: tindakan pada komentar (bergantung izin).

{% hint style="info" %}
Jika muncul pesan **“Tidak ada data yang ditemukan”**, berarti belum ada komentar, atau hasil pencarian kosong.
{% endhint %}

***

### Pola kerja moderasi (yang paling sering dipakai)

{% tabs %}
{% tab title="Cek rutin" %}
1. Buka menu **Komentar**.
2. Pakai **Cari** untuk kata kunci sensitif (mis. link, promo, kata kasar).
3. Baca komentar terbaru dari kolom **Created At**.
4. Ambil tindakan di kolom **Aksi**.
{% endtab %}

{% tab title="Bersihkan spam" %}
1. Filter dengan **Cari** untuk pola spam (mis. `http`, `bit.ly`, `promo`).
2. Centang beberapa komentar (jika checkbox tersedia).
3. Gunakan dropdown **Aksi** untuk tindakan massal.
{% endtab %}
{% endtabs %}

***

### Aksi yang biasanya tersedia

Tombol pada kolom **Aksi** bisa berbeda tiap role.

Umumnya kamu akan menemukan salah satu dari ini:

* **Hapus**: menghapus komentar dari sistem.
* **Sembunyikan/Nonaktifkan**: komentar tidak tampil di halaman publik (jika tersedia).
* **Setujui/Approve**: menampilkan komentar ke publik (jika sistem memakai moderasi).

{% hint style="warning" %}
Kalau kamu ragu, pilih **Sembunyikan** dulu.\
Hapus sebaiknya untuk spam atau pelanggaran jelas.
{% endhint %}

### Pencarian dan pengelolaan daftar

#### Cari komentar

* Ketik kata kunci di kolom **Cari**.
* Gunakan potongan kata. Contoh: `http`, `promo`, `wa.me`.

#### Atur tampilan tabel

* Ubah jumlah baris melalui dropdown (mis. **10**).
* Sembunyikan/tampilkan kolom lewat dropdown **Kolom** (jika tersedia).

***

### Troubleshooting

#### Menu Komentar tidak ada

Akun kamu tidak punya izin. Cek di [Hak Akses](../hak-akses.md).

#### Komentar tidak muncul di halaman publik

Beberapa kemungkinan:

* komentar masih menunggu persetujuan (jika ada moderasi)
* diskusi/komentar dimatikan pada konten tersebut
* visibilitas konten bukan publik
