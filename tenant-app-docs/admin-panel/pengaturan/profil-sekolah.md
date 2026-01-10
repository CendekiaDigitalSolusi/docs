---
icon: school
---

# Profil Sekolah

Halaman **Profil Sekolah** menyimpan data identitas sekolah yang dipakai di berbagai tempat. Data ini biasanya muncul di website publik, halaman profil, footer, dan metadata.

{% hint style="warning" %}
Isi data ini dengan benar sejak awal. Beberapa data (seperti NPSN dan alamat) sering dipakai untuk administrasi dan integrasi.
{% endhint %}

***

### Alur pengisian yang disarankan

Kalau baru pertama kali setup, ikuti urutan ini agar dropdown alamat tidak membingungkan.

{% stepper %}
{% step %}
#### 1) Isi identitas dasar

Isi **Nama Sekolah** dan **NPSN**.
{% endstep %}

{% step %}
#### 2) Isi alamat bertahap

Pilih **Provinsi → Kota/Kabupaten → Kecamatan → Kelurahan/Desa**.
{% endstep %}

{% step %}
#### 3) Lengkapi profil publik

Isi kepala sekolah, pesan sambutan, deskripsi, dan URL profil.
{% endstep %}

{% step %}
#### 4) Isi statistik & media sosial

Isi jumlah guru/siswa/staf/alumni dan tautan medsos.
{% endstep %}

{% step %}
#### 5) Simpan

Scroll ke bawah lalu klik **Simpan**.
{% endstep %}
{% endstepper %}

***

### Data identitas sekolah

#### Nama Sekolah

Nama resmi sekolah yang tampil di website. Gunakan format yang konsisten.

Contoh:

* `SMA Negeri 1 Contoh`
* `SMK Contoh Digital`

#### NPSN

Nomor Pokok Sekolah Nasional. Umumnya angka (panjang mengikuti data resmi).

{% hint style="info" %}
Gunakan NPSN yang sama dengan data Dapodik. Ini membantu saat butuh validasi atau sinkronisasi.
{% endhint %}

***

### Kontak dan alamat

#### Alamat Sekolah

Isi alamat lengkap. Contoh format:

`Jl. … No. …, RT/RW …`

#### Email Sekolah

Email kontak sekolah. Gunakan email yang benar-benar aktif.

#### Telepon Sekolah

Nomor telepon kantor/TU. Gunakan format yang mudah dibaca.

#### Kode Pos Sekolah

Kode pos sesuai lokasi sekolah.

#### Provinsi / Kota / Kecamatan / Kelurahan

Bagian ini biasanya berupa dropdown. Urutannya penting:

1. Pilih **Provinsi**
2. Pilih **Kota / Kabupaten**
3. Pilih **Kecamatan**
4. Pilih **Kelurahan / Desa**

{% hint style="info" %}
Kalau pilihan Kota/Kecamatan kosong, biasanya karena Provinsi belum dipilih.
{% endhint %}

***

### Profil kepemimpinan dan status

#### Kepala Sekolah

Isi nama kepala sekolah.

#### Foto Kepala Sekolah

Upload foto kepala sekolah (biasanya tampil di halaman profil/beranda).

Rekomendasi:

* foto formal, latar rapi
* orientasi portrait
* tidak blur

#### Status Sekolah

Pilihan seperti **Negeri** / **Swasta**.

#### Jenis Sekolah

Pilihan seperti **SD/SMP/SMA/SMK** (mengikuti sistem).

#### Pemilik Sekolah

Dropdown pemilik yayasan/instansi (jika tersedia).

{% hint style="warning" %}
Jika status/jenis sekolah salah, informasi publik bisa terlihat tidak akurat.
{% endhint %}

***

### Konten profil (untuk website)

#### Pesan Sambutan

Teks sambutan singkat, biasanya dari kepala sekolah. Cocok 1–2 paragraf.

Saran struktur:

* salam pembuka
* komitmen sekolah
* ajakan/CTA singkat

#### Deskripsi

Deskripsi umum sekolah. Biasanya dipakai di halaman profil atau bagian “Tentang”.

Tips:

* tulis fakta dan nilai sekolah
* hindari terlalu panjang
* gunakan kalimat pendek

#### URL Profil Sekolah

URL halaman profil sekolah (jika sekolah punya halaman khusus).

Contoh:

* `https://sekolah.sch.id/profil`

{% hint style="info" %}
Kalau website sekolah berada di domain yang sama, isi URL yang stabil dan tidak sering berubah.
{% endhint %}

***

### Statistik sekolah

Bagian ini menampilkan angka ringkas di website (tergantung tema).

Field yang ada:

* **Jumlah Alumni**
* **Jumlah Siswa**
* **Jumlah Staf**
* **Jumlah Guru**

{% hint style="warning" %}
Angka ini biasanya tidak otomatis. Update secara berkala agar informasi publik tetap valid.
{% endhint %}

***

### Media sosial

Isi tautan resmi sekolah. Jika tidak punya akun, kosongkan saja.

Field yang tersedia di gambar:

* **Facebook**
* **Twitter / X**
* **Instagram**
* **YouTube**

Tips:

* pakai URL lengkap, contoh `https://instagram.com/…`
* pastikan link bisa diakses publik

***

### Simpan perubahan

Setelah selesai:

1. Scroll ke bagian bawah.
2. Klik **Simpan**.
3. Cek halaman publik untuk memastikan data tampil benar.

***

### Troubleshooting

#### Dropdown wilayah kosong

* Pastikan urutan pemilihan benar: Provinsi → Kota → Kecamatan → Kelurahan.
* Refresh halaman jika daftar tidak termuat.

#### Foto kepala sekolah gagal diunggah

* Coba file lebih kecil.
* Coba format JPG/PNG.
* Pastikan koneksi stabil.

#### Data tidak berubah di website

* Pastikan sudah klik **Simpan**.
* Coba hard refresh (Ctrl+F5) di halaman publik.
* Coba mode incognito untuk menghindari cache.
