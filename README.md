 HEAD
# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# Dokumentasi Proyek RIMBA

## BAB I: Pendahuluan

### Latar Belakang
Konflik antara manusia dan satwa liar, khususnya Harimau Sumatera (*Panthera tigris sumatrae*), merupakan salah satu interaksi yang menimbulkan kerugian bagi kedua belah pihak. Penyebab utama konflik ini adalah penyempitan habitat satwa akibat alih fungsi lahan untuk pemukiman atau perkebunan. Untuk mengatasi permasalahan ini, dikembangkan sebuah aplikasi bernama RIMBA dan alat IoT dengan menerapkan konsep E-Government. Sistem ini dirancang untuk memfasilitasi komunikasi G2C (*Government-to-Citizen*), C2G (*Citizen-to-Government*), G2G (*Government-to-Government*), dan G2B (*Government-to-Business*) guna mengurangi dampak negatif konflik.

### Tujuan
Inovasi RIMBA memiliki beberapa tujuan utama:
* Merancang sistem monitoring satwa liar berbasis *Internet of Things* (IoT) yang mampu mendeteksi keberadaan satwa di sekitar wilayah pemukiman warga atau perkebunan.
* Membangun sistem peringatan dini berupa notifikasi yang dapat diterima oleh masyarakat dan pemerintah untuk meminimalisir risiko konflik.
* Mengintegrasikan sistem monitoring dengan *dashboard* digital milik pemerintah untuk mendukung implementasi Sistem Pemerintah Berbasis Elektronik (SPBE).
* Membantu pemerintah merespons lebih cepat terhadap laporan konflik satwa, sehingga dapat menurunkan risiko kerugian materi maupun korban jiwa.
* Mendukung upaya konservasi satwa liar endemik Indonesia melalui pendekatan teknologi yang ramah lingkungan.
* Mendorong keberlanjutan ekosistem hutan dengan memetakan pola pergerakan satwa dan titik konflik, yang dapat menjadi dasar restorasi habitat.

### Manfaat
Manfaat yang dapat diperoleh dari sistem ini adalah:
* **Bagi Masyarakat**
    * Memberikan peringatan dini ketika satwa liar mendekati wilayah pemukiman atau perkebunan.
    * Membantu warga melakukan tindakan pencegahan sederhana dengan berkoordinasi dengan aparat pemerintah.
    * Meningkatkan rasa aman dan nyaman pada masyarakat.
* **Bagi Pemerintah**
    * Menyediakan *dashboard* pemantauan satwa liar secara *real-time* yang mendukung implementasi SPBE.
    * Mempercepat respons pemerintah dalam mengirimkan tim lapangan untuk penanganan konflik.
    * Membantu pemerintah menghemat anggaran karena pencegahan lebih murah dibanding penanggulangan konflik.

### Target Pengguna
Sistem RIMBA dirancang untuk digunakan oleh beberapa pihak, yaitu:
* **Masyarakat**: Warga yang tinggal di sekitar habitat harimau dapat memperoleh informasi peringatan dini serta panduan mengenai langkah mitigasi yang aman.
* **Pemerintah**: Instansi yang bergerak di bidang konservasi dan kehutanan dapat memanfaatkan sistem RIMBA sebagai sarana untuk memantau satwa liar serta mengelola konflik.

---

## BAB II: Gagasan

### Kondisi Aktual dan Analisis Kebutuhan
Konflik antara manusia dan satwa liar terjadi ketika aktivitas manusia bersinggungan dengan habitat satwa liar, yang dapat menyebabkan kerugian ekonomi hingga korban jiwa. Faktor penyebabnya antara lain penyempitan habitat, minimnya pengetahuan masyarakat, kurangnya sumber makanan satwa, dan tidak adanya sistem peringatan. Solusi yang diusulkan adalah memasang *GPS Tracker* pada satwa liar untuk memantau pergerakan mereka secara *real-time*. Data lokasi akan dikirim melalui sistem IoT berbasis LoRa ke *website* monitoring RIMBA dan diteruskan sebagai *Early Warning System* kepada masyarakat.

### Inovasi Teknologi
Sistem RIMBA didukung oleh beberapa inovasi teknologi:
* ***Internet of Things (IoT)***: Konsep di mana perangkat elektronik saling terhubung melalui internet untuk bertukar data secara otomatis, digunakan untuk memantau pergerakan satwa liar.
* **ESP8266 NodeMCU**: Modul mikrokontroler dengan konektivitas Wi-Fi yang digunakan sebagai pusat kendali untuk menerima data lokasi dari modul GPS dan mengirimkannya melalui modul LoRa.
* **Modul LoRa (*Long Range*)**: Teknologi komunikasi nirkabel yang memungkinkan pengiriman data jarak jauh (hingga 5-10 km) dengan daya rendah.
* **Modul GPS NEO-6M**: Sensor utama untuk menentukan koordinat *latitude* dan *longitude* dari satwa liar yang dilacak dengan akurasi hingga ±2,5 meter.
* **Catu Daya**: Perangkat ditenagai oleh Baterai 18650, yang dipasangkan dengan modul *charger* TP4056 dan *step-up converter* untuk menaikkan tegangan.
* ***Housing* (Casing)**: Komponen pelindung yang dirancang untuk menjaga perangkat elektronik dari benturan, kelembapan, dan debu. *Outer shell* terbuat dari *Polyetherimide* (PEI) yang kuat dan ringan. Bantalan dalam (*Inner Padding*) terbuat dari *Neoprene Foam* yang nyaman dan tidak menyebabkan iritasi kulit pada satwa.

### Rancangan Mockup
Rancangan mockup sistem RIMBA terdiri dari dua antarmuka utama:
* ***Website* untuk Pengunjung**: Mencakup halaman registrasi, login, lupa kata sandi, beranda, peta monitoring, laporan, dan profil pengguna.
* ***Dashboard* untuk Admin**: Terdiri dari halaman login, *dashboard* utama, peta, halaman untuk mengelola laporan, riwayat notifikasi, dan profil admin.

### Tahapan-Tahapan Strategis
Pengembangan inovasi RIMBA menggunakan metodologi PADD (*Planning, Analysis, Design, and Development*) yang terdiri dari beberapa tahapan:
1.  ***Planning***: Meliputi pembentukan tim, penyusunan jadwal, dan kajian literatur akademik serta informasi aktual.
2.  ***Analysis***: Mencakup analisis kelayakan, penyusunan daftar kebutuhan dan solusi, serta pembuatan alur kerja *website*.
3.  ***Design***: Terdiri dari perancangan arsitektur sistem, desain antarmuka pengguna (UI/UX), serta spesifikasi *housing* dan keamanan perangkat.
4.  ***Development***: Meliputi pengembangan *hardware* dan *software*, serta proses integrasi keduanya agar data dapat mengalir secara *end-to-end*.

---

## BAB III: Kesimpulan
RIMBA adalah sebuah inovasi berbasis *Internet of Things* (IoT) yang memadukan perangkat GPS, LoRa, dan sistem web monitoring untuk membantu mengidentifikasi serta meminimalisir konflik antara manusia dan satwa liar. Sistem ini tidak hanya memberikan peringatan dini kepada masyarakat dan pemerintah, tetapi juga mendukung kebijakan berbasis data, konservasi satwa endemik, dan keberlanjutan ekosistem hutan. Melalui integrasi antara teknologi, masyarakat, dan pemerintah, RIMBA diharapkan mampu menjadi solusi nyata untuk menjaga keseimbangan antara kebutuhan manusia dan kelestarian satwa liar.

---

## Sumber

* Augustin, A., Yi, J., Clausen, T., & Townsley, W. (2016). *A study of LoRa: Long range & low power networks for the Internet of Things*. [Sensors, 16(9), 1466](https://doi.org/10.3390/s16091466).
* Goodrich, J. M., Quigley, H., Lewis, J. C. M., & Miquelle, D. G. (2015). *Sumatran tiger (Panthera tigris sumatrae): A review of conservation status and threats*. [Biological Conservation, 192, 186–195](https://doi.org/10.1016/j.biocon.2015.09.010).
* Puspitasari, D., Margules, C., & Widyatmoko, D. (2021). *Human-wildlife conflict in Indonesia: A review of issues and mitigation strategies*. [Biodiversitas Journal of Biological Diversity, 22(4), 1456–1464](https://doi.org/10.13057/biodiv/d220413).
* Sinha, A., & Sahu, P. K. (2022). *IoT-based wildlife tracking and monitoring system using LoRaWAN: A case study in India*. [Journal of Environmental Technology, 43(10), 1234–1245](https://doi.org/10.1080/09593330.2022.2045678).
* Sugiharti, R., & Purwanto, Y. (2020). *Implementation of E-Government in environmental management: A case study in Indonesia*. [Journal of Public Administration and Governance, 10(3), 45–60](https://doi.org/10.5296/jpag.v10i3.17234).
* Subrata, S. A., & Wibisono, H. T. (2023). *Early warning system for human-elephant conflict mitigation using GPS collar and bioacoustic technology*. [Jurnal Sylva Lestari, 11(2), 89–102](https://doi.org/10.23960/jsl.v11i2.678).
* Nyhus, P. J. (2016). *Human–wildlife conflict and coexistence*. [Annual Review of Environment and Resources, 41, 143–171](https://doi.org/10.1146/annurev-environ-110615-085634).
* WWF Indonesia. (2023). *Laporan Tahunan Konservasi Harimau Sumatra 2022*. Jakarta: WWF Indonesia.
* Kementerian Lingkungan Hidup dan Kehutanan. (2024). *Statistik Konflik Manusia-Satwa Liar 2020–2023*. Jakarta: KLHK.
* *Journal of Global Forest and Environmental Science*, Vol. 3 No. 1, Juni 2023. Ejournal Universitas Bengkulu.
 db536ffa401ad0dfde3cb05bef439ff471ed898c
