# Panduan Kontribusi

Terima kasih telah berkontribusi pada repository OpenSeriesWeb! Kami sangat menghargai setiap kontribusi yang diberikan untuk meningkatkan proyek ini. Harap ikuti panduan berikut untuk memulai kontribusi Anda.

**Perhatian**: Ini adalah repository untuk website OpenSeries. Jika Anda ingin berkontribusi pada library OpenSeries, silakan kunjungi [OpenSeries Repository](https://github.com/bellshade/OpenSeries/).

Proyek ini menggunakan Next.js sebagai framework, serta Bun sebagai package manager dan runtime. Pastikan Anda telah menginstal Bun sebelum memulai.

## Ketentuan Kontribusi

-   Hasil pekerjaan Anda harus merupakan buatan sendiri dan bebas dari hak cipta orang lain. Kesamaan dengan karya orang lain tidak akan kami merge.
-   Setiap pull request yang di-merge akan dilisensikan di bawah lisensi MIT.
-   Pekerjaan Anda harus mengikuti standar dan gaya penulisan kode yang telah ditetapkan.

## Langkah-Langkah Kontribusi

1. Fork repository ini.
2. Clone repository yang sudah di-fork ke lokal Anda:
    ```bash
    git clone https://github.com/username/OpenSeriesWeb.git
    ```
    Ganti `username` degan username Anda.
3. Pindah ke branch `develop`:
    ```bash
    git checkout develop
    ```
4. Buat branch baru sesuai fitur atau perbaikan yang akan Anda tambahkan:
    ```bash
    git checkout -b nama-branch
    ```
5. Jalankan website menggunakan `bun dev`:
    ```bash
    bun dev
    ```
6. Lakukan perbaikan atau penambahan pada website.
7. Sebelum melakukan commit, pastikan:
    - Semua berjalan lancar di website.
    - Jalankan `bun format` untuk melakukan formatting menggunakan Prettier.
    - Jalankan `bun lint` untuk melakukan lint menggunakan ESLint.
    - Perbaiki jika ada error saat menjalankan `bun lint`.
8. Jika semua sudah sesuai, lakukan commit dan push perubahan Anda.
9. Lakukan pull request ke branch `develop` di reposotory ini.

## Pesan Commit

Gunakan format berikut sesuai dengan [Conventional Commits](https://www.conventionalcommits.org/id/v1.0.0/):

-   `feat:` untuk penambahan fitur baru.
-   `fix:` untuk memperbaiki bug.
-   `docs:` untuk mengubah dokumentasi.
-   `add:` untuk menambahkan konten atau file baru.

Contoh:

```bash
git commit -m "feat: Menambah fitur baru untuk ..."
```

## Proses Review dan Merge

Pull request Anda akan di-merge jika:

-   Mengikuti standar dan arahan dari CONTRIBUTING.md.
-   Lolos uji dan pemeriksaan dari tes yang telah kami sediakan.

Jika ada pertanyaan atau masalah, jangan ragu untuk mengajukan issue atau menghubungi tim pengembangan.

Terima kasih atas kontribusi Anda!
