# Rank System Save - xKeyy Edition 🎮

Aplikasi pelacak rank berbasis web yang elegan dan modern. Sistem ini memungkinkan pengguna untuk mencatat performa pertandingan (Kill, Death, Assist) dan secara otomatis menghitung kenaikan atau penurunan Rank Rating (RR) dengan sistem progresi bertingkat, terinspirasi dari game kompetitif populer.

## 🚀 Fitur Utama

*   **Perhitungan RR Pintar**: Kalkulasi poin dinamis berdasarkan statistik KDA dan tier rank saat ini.
*   **Progresi Rank Bertingkat**: Naik dari rank **Bronze** hingga mencapai kasta tertinggi, **Radiant**.
*   **Penyimpanan Data (Auto-Save)**: Menggunakan `localStorage` sehingga rank dan poin kamu tetap tersimpan meski browser ditutup atau di-refresh.
*   **Top Global Leaderboard**: Tampilan simulasi peringkat global dengan estetika premium.
*   **Antarmuka Responsif**: Desain tema gelap (dark mode) yang modern dan nyaman di mata.
*   **Animasi Rank Up**: Efek visual khusus saat kamu berhasil naik ke tier yang lebih tinggi.

## 🛠️ Teknologi yang Digunakan

*   **HTML5**: Untuk struktur utama aplikasi.
*   **CSS3**: Untuk desain, layout Flexbox, dan animasi kustom.
*   **JavaScript (ES6+)**: Untuk logika perhitungan rank, manajemen data, dan penyimpanan lokal.

## 📈 Tingkatan Rank

Sistem ini mencakup progresi berikut:
1.  **Bronze** (3 Sub-tier)
2.  **Silver** (3 Sub-tier)
3.  **Gold** (4 Sub-tier)
4.  **Platinum** (5 Sub-tier)
5.  **Ascendant** (5 Sub-tier)
6.  **Legend** (5 Sub-tier)
7.  **Honor** (5 Sub-tier)
8.  **Immortal** (6 Sub-tier)
9.  **Radiant** (Tier Elit - Berbasis Poin)

## 📂 Struktur Proyek

```text
/rank-system-xkeyy
  ├── index.html    # Struktur utama dan komponen UI
  ├── style.css     # Desain, animasi, dan tata letak
  └── script.js     # Logika rank, perhitungan KDA, dan sistem simpan
