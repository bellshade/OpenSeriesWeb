# Panduan Kontribusi

Terima kasih atas minat Anda untuk berkontribusi pada repository OpenSeriesWeb! Kami sangat mengapresiasi dan menghargai segala bentuk kontribusi yang membantu meningkatkan project ini. Mohon ikuti panduan berikut untuk memulai kontribusi Anda.

> [!NOTE]
> Ini adalah repository untuk **Website OpenSeries.** Jika Anda ingin berkontribusi pada **Library OpenSeries**, silakan kunjungi [Repositori OpenSeries](https://github.com/bellshade/OpenSeries/).

Project ini menggunakan [Next.js](https://nextjs.org/) sebagai framework untuk membangun website OpenSeries, serta [Bun](https://bun.sh/) sebagai package manager dan JavaScript runtime environment.

## Daftar isi
- [Ketentuan Kontribusi](#ketentuan-kontribusi)
- [Langkah-Langkah Kontribusi](#langkah-langkah-kontribusi)
- [Format Pesan Commit](#format-pesan-commit)
- [Proses Review dan Merge](#proses-review-dan-merge)

## Ketentuan Kontribusi

- Setiap kontribusi harus merupakan karya sendiri dan tidak melanggar hak cipta orang lain. kontribusi yang menyalin karya orang lain tidak akan kami merge.
- Setiap pull request yang di-merge akan dilisensikan di bawah [Lisensi MIT](https://github.com/bellshade/OpenSeriesWeb/blob/main/LICENSE).
- Pekerjaan Anda harus mengikuti standar dan gaya penulisan kode yang telah ditetapkan.

## Langkah-Langkah Kontribusi

1. Fork repository ini.

2. Clone repository yang sudah di-fork ke perangkat lokal Anda:
    ```bash
    git clone https://github.com/username/OpenSeriesWeb.git
    ```

    Ubah `username` degan username Github Anda.

3. Masuk ke direktori project, lalu pindah ke branch `develop`:
    ```bash
    git checkout develop
    ```

4. Setup pre-commit
    - Ikuti panduan resmi mengenai instalasi di [website pre-commit](https://pre-commit.com/#install)
    - Jalankan `pre-commit install`

5. Buat branch baru sesuai perubahan atau perbaikan yang ingin Anda tambahkan:
    ```bash
    git checkout -b nama-branch
    ```

6. Mulailah membuat perubahan atau perbaikan yang diinginkan.

7. Jalankan project secara lokal untuk menguji perubahan Anda dengan perintah:
    ```bash
    bun dev
    ```
    Anda dapat mengakses website OpenSeries yang berjalan secara lokal melalui URL http://localhost:3000

8. Jika semua sudah sesuai, tambahkan perubahan yang telah Anda lakukan ke dalam staging area dengan perintah berikut:
    ```bash
    git add .
    ```

9. Setelah selesai, buatlah pesan commit yang sesuai dengan [format yang sudah di tentukan](#format-pesan-commit).

10. Push commit anda kedalam branch yang Anda buat sebelumnya:
    ```bash
    git push origin nama-branch
    ```

11. Buatlah Pull Request ke branch `develop` pada [repositori utama](https://github.com/bellshade/OpenSeriesWeb) melalui _interface_ Github.

## Format Pesan Commit

Kami sangat menghargai penggunaan format commit yang konsisten untuk memudahkan pemantauan dan pemeliharaan project. Mohon gunakan format berikut sesuai dengan [Conventional Commits](https://www.conventionalcommits.org/id/v1.0.0/):

- `feat:` untuk menandai penambahan fitur baru.
- `fix:` untuk menandai perbaikan bug.
- `docs:` untuk menandai perubahan dalam dokumentasi.
- `add:` untuk menandai penambahan konten atau file baru.

Contoh:
```bash
git commit -m "feat: Menambahkan fitur search pada halaman dokumentasi."
```

Mohon pastikan pesan commit Anda jelas dan deskriptif untuk memudahkan proses review dan integrasi.

## Proses Review dan Merge

Pull Request Anda akan di-merge jika:

- Mengikuti standar dan petunjuk dari CONTRIBUTING.md.
- Lulus uji dan pemeriksaan dari tes yang telah kami sediakan.

Jika Anda memiliki pertanyaan atau mengalami masalah, jangan ragu untuk membuka [issue](https://github.com/bellshade/OpenSeriesWeb/issues) atau menghubungi tim pengembangan.

Terima kasih atas kontribusi Anda!
