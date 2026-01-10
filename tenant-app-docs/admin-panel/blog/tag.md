---
icon: tag
---

# Tag

Tag itu “label kecil” untuk artikel. Kalau **Kategori** adalah rak buku, **Tag** adalah stiker topik.

Contoh:

* Kategori: `Pengumuman`
* Tag: `PPDB`, `OSN`, `Pramuka`, `Kelas 7`

### Kapan sebaiknya pakai Tag?

Gunakan tag untuk hal-hal yang:

* sering muncul lintas kategori
* bersifat spesifik
* jumlahnya bisa banyak, tapi tetap terkontrol

{% hint style="info" %}
Satu artikel biasanya cukup pakai **1 kategori** dan **2–5 tag**.
{% endhint %}

### Masuk ke halaman Tag

1. Masuk ke [dashboard-admin.md](../dashboard-admin.md "mention").
2. Buka **Admin → Blog → Tag**.

### Peta halaman (biar cepat paham)

Di layar Tag, kamu akan ketemu komponen ini:

* **Tambah Baru**: bikin tag baru.
* **Cari**: filter tag berdasarkan nama.
* Dropdown **Aksi**, **Kolom**, dan jumlah baris (mis. **10**).
* **Tabel Tag** dengan kolom:
  * **Nama**
  * **Slug**
  * **Deskripsi**
  * **Aksi** (Edit/Hapus)

{% hint style="info" %}
Kalau muncul pesan **“Tidak ada data yang ditemukan”**, berarti belum ada tag atau pencarian terlalu ketat.
{% endhint %}

### Aturan main (supaya tag tidak berantakan)

* Hindari tag yang mirip makna. Contoh: `Lomba` vs `Perlombaan`.
* Pakai bentuk konsisten. Contoh: `PPDB`, bukan campur `ppdb` dan `PPDB`.
* Jangan buat tag untuk hal yang cuma muncul sekali.

{% hint style="warning" %}
Terlalu banyak tag bikin pencarian sulit. Lebih baik sedikit tapi konsisten.
{% endhint %}

### Buat tag baru

{% stepper %}
{% step %}
#### Buka form

Klik tombol **Tambah Baru**.
{% endstep %}

{% step %}
#### Isi data tag

* **Nama**: label tag yang akan dipilih di artikel. Contoh: `PPDB`.
* **Slug**: versi URL yang rapi.
  * Jika dikosongkan, sistem biasanya membuat slug otomatis dari nama.
* **Deskripsi**: catatan singkat (opsional).

Aturan slug yang aman:

* pakai huruf kecil
* ganti spasi dengan `-`
* hindari karakter spesial

Contoh cepat:

* Nama: `Kegiatan Sekolah`
* Slug: `kegiatan-sekolah`
{% endstep %}

{% step %}
#### Simpan

Klik **Simpan**. Tag langsung masuk ke daftar.
{% endstep %}
{% endstepper %}

{% hint style="info" %}
Kalau ragu, biarkan **Slug** kosong supaya konsisten otomatis dari sistem.
{% endhint %}

### Edit dan hapus tag

#### Edit

1. Klik **Edit** (ikon pensil).
2. Ubah **Nama/Slug/Deskripsi**.
3. Simpan.

#### Hapus

1. Klik **Hapus** (ikon tempat sampah).
2. Konfirmasi.

{% hint style="warning" %}
Menghapus tag tidak menghapus artikel.\
Tapi tag tersebut akan hilang dari artikel yang memakainya.
{% endhint %}

### Checklist kualitas (cepat, tapi ngaruh)

Sebelum klik simpan, cek ini:

* [ ] Nama tag tidak duplikat.
* [ ] Slug mudah dibaca.
* [ ] Tag relevan untuk lebih dari 1 artikel.

### Troubleshooting

#### Tidak bisa menambah tag

* Pastikan akun punya izin kelola tag.
* Coba refresh halaman.
* Coba login ulang.

#### Tag tidak muncul saat buat artikel

* Pastikan tag sudah di **Simpan**.
* Coba reload halaman editor artikel.
