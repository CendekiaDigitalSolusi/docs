---
icon: comment-dots
---

# Pengaturan Diskusi

Pengaturan **Diskusi** mengatur komentar pada artikel blog. Pengaturan ini menjadi **default untuk artikel baru**. Artikel yang sudah dibuat bisa punya pengaturan sendiri.

***

### Pengaturan artikel dasar

#### Izinkan orang mengirim komentar pada artikel-artikel baru

Jika aktif, artikel baru **menerima komentar**. Jika nonaktif, kolom komentar akan dimatikan secara default.

{% hint style="info" %}
Teks di halaman menjelaskan: perubahan di sini hanya berlaku untuk **artikel baru**. Artikel lama bisa tetap mengikuti setting lama.
{% endhint %}

***

### Pengaturan komentar lainnya

#### Mewajibkan pengguna untuk masuk sebelum mengirim komentar

Jika aktif, hanya pengguna yang login yang bisa komentar. Ini efektif untuk mengurangi spam.

#### Tutup komentar artikel lama secara otomatis

Jika aktif, komentar akan ditutup untuk artikel yang sudah melewati batas hari.

**Tutup komentar untuk artikel yang lebih lama dari (X) hari**

Isi angka hari. Contoh pada gambar: `14` hari.

Saran nilai:

* `7–14` hari untuk berita cepat (pengumuman, event)
* `30–90` hari untuk artikel evergreen

{% hint style="warning" %}
Fitur ini bagus untuk mengurangi spam pada artikel lama. Tapi pastikan tidak mengganggu diskusi yang masih relevan.
{% endhint %}

***

### Sebelum sebuah komentar muncul

Bagian ini mengatur moderasi komentar.

#### Komentar harus disetujui secara manual

Jika aktif, setiap komentar masuk status _pending_. Admin harus menyetujui sebelum tampil publik.

#### Penulis komentar harus mempunyai komentar yang disetujui sebelumnya

Jika aktif, pengguna baru perlu satu komentar yang disetujui dulu. Setelah itu komentar berikutnya bisa langsung tampil (tergantung setting lain).

{% hint style="success" %}
Kombinasi yang sering dipakai:

* aktifkan **mewajibkan login**
* aktifkan **harus punya komentar yang disetujui sebelumnya**

Hasilnya: spam turun, moderasi tetap ringan.
{% endhint %}

***

### Skenario rekomendasi

{% tabs %}
{% tab title="Sekolah ingin 0 spam" %}
* Wajib login: **aktif**
* Moderasi manual: **aktif**
* Tutup komentar artikel lama: **aktif** (mis. 14 hari)
{% endtab %}

{% tab title="Sekolah ingin diskusi aktif" %}
* Wajib login: **aktif**
* Moderasi manual: **nonaktif**
* Harus punya komentar disetujui sebelumnya: **aktif**
* Tutup komentar artikel lama: **aktif** (mis. 30 hari)
{% endtab %}
{% endtabs %}

***

### Simpan perubahan

1. Atur checkbox dan nilai hari.
2. Klik **Simpan**.
3. Coba buat artikel baru, lalu cek apakah komentar mengikuti default yang baru.

### Troubleshooting

#### Komentar tidak muncul

* Cek apakah **moderasi manual** aktif.
* Cek apakah komentarnya masih pending di halaman [Komentar](../../blog/komentar.md).

#### Pengunjung tidak bisa komentar

* Cek apakah komentar diizinkan untuk artikel baru.
* Cek apakah wajib login aktif.
* Cek apakah komentar ditutup karena artikel sudah melewati batas hari.
