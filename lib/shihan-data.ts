export interface QuickFact {
  label: string
  value: string
}

export interface Testimonial {
  name: string
  date: string
  quote: string
  image: string
}

export interface TimelineSection {
  heading: string
  bullets: string[]
}

export interface TimelineEntry {
  date: string
  title: string
  paragraphs: string[]
  list?: string[]
  sections?: TimelineSection[]
}

export const bioParagraphs: string[] = [
  'Perguruan didirikan oleh Erick Danurahardja, seorang praktisi Kyokushin Karate sejak 2003 yang pada waktu itu masih sebagai anggota dari Kyokushin Karate Indonesia (KKI) pimpinan Shihan JB Sujoto.',
  'Pada tahun 2008 KKI bergabung dengan Shinkyokushinkai pimpinan Kenji Midori dan berubah menjadi World Karate Organization Shinkyokushin Indonesia (WKOSI).',
  'Erick Danurahardja mengikuti ujian sabuk hitam pertama kali pada tahun 2015 oleh Shihan Mas Gufron Heru di Surabaya dan dinyatakan lulus ke Shodan.',
  'Pernah mengikuti Kejurnas ke-20 tahun 2017 WKOSI dan keluar sebagai juara 1 kelas bebas putra.',
  '2019 memperoleh tingkatan Nidan setelah diuji langsung oleh Shihan JB Sujoto dengan 10x kumite di Bandungan.',
  'Di tahun yang sama juga menjadi juara 1 Indonesia Open Tournament yang diadakan oleh Indonesia Fullcontact Karate Association (IFKA), lalu berikutnya mendapatkan medali emas di Tarung Bebas Indonesia (TBI) dan terakhir menjadi perwakilan Indonesia sebagai atlit untuk World Open Karate Tournament (WOKT) ke-12 di Tokyo, Jepang.',
  'Selain itu Erick Danurahardja juga beberapa kali menjuarai pertandingan exhibition Muay Thai dan Kick Boxing, bahkan setiap ada kesempatan ke luar kota atau ke luar negeri pasti akan menyempatkan diri mencari dojo atau camp terdekat untuk berlatih dan menambah relasi secara global. Beberapa negara yang pernah dikunjungi untuk berlatih seperti Singapore, Vietnam, Thailand, Korea, Jepang.',
  'Sedangkan setiap kali ada seminar di dalam negeri yang dibawa oleh praktisi legendaris seperti Kenji Midori, Shinichi Sotodate, Akira Masuda, Satoshi Yui, Yoshiji Soeno, Kaoru Okubo, Trainer Gae, Saenchai, pasti Erick akan menyempatkan waktu untuk ikut dan menambah ilmu. Karena baginya, ilmu itu tidak ada batasnya, harus terus menerus digali melalui orang-orang hebat yang memang diakui sepak terjangnya semasa muda dulu.',
]

export const quickFacts: QuickFact[] = [
  { label: 'Jabatan', value: 'Shihan & Branch President — Shidokan Indonesia' },
  { label: 'Tingkat', value: 'DAN IV — Shidokan International' },
  { label: 'Mulai Berlatih', value: 'Kyokushin Karate sejak 2003' },
  { label: 'Sabuk Hitam', value: 'Shodan 2015 (Shihan Mas Gufron Heru, Surabaya)' },
  { label: 'Prestasi', value: 'Juara 1 Kejurnas ke-20 WKOSI 2017 & Indonesia Open (IFKA) 2019' },
  { label: 'Internasional', value: 'Perwakilan Indonesia — World Open Karate Tournament ke-12, Tokyo' },
  { label: 'Sertifikasi', value: 'Pelatih Fisik Nasional (LP2O LANKOR), Personal Trainer (RAI Institute)' },
]

export const testimonials: Testimonial[] = [
  {
    name: 'Yoshiji Soeno',
    date: 'Mei 2023',
    quote: 'Erick is very strong. Samurai Spirit.',
    image: '/images/yoshiji-soeno.png',
  },
  {
    name: 'Satoshi Yui',
    date: 'November 2023',
    quote: 'Very good technique, you have a good form in kumite.',
    image: '/images/satoshi-yui.png',
  },
  {
    name: 'Akira Masuda',
    date: 'Juni 2024',
    quote: 'You have a good skills, not only fight but also understand bushido in Kyokushin way.',
    image: '/images/akira-masuda.png',
  },
]

export const timeline: TimelineEntry[] = [
  {
    date: '18 September 2020',
    title: 'Proses pelatihan dan standarisasi kurikulum perguruan di bawah bimbingan Shihan Shin dari Korea',
    paragraphs: [
      'Setelah keluar dari WKO Shinkyokushinkai Indonesia, Erick Danurahardja mengikuti proses pelatihan dan standarisasi kurikulum perguruan di bawah bimbingan Shihan Shin dari Korea. Pada tanggal 18 September 2020 mendapatkan pengakuan sebagai branch chief IKO World Zenkyokushin dalam bentuk sertifikat Branch Chief yang diterbitkan oleh honbu di bawah pimpinan Kazuyuki Hasegawa (pemenang 2nd All Japan Karate Open Tournament), Branch Chief Prefektur Aichi yang ditunjuk langsung oleh Sosai Oyama saat itu.',
    ],
  },
  {
    date: '14 November 2020',
    title: 'Madame Chang Rooftop',
    paragraphs: [
      'Di bawah bendera yang baru, dojo Xpartan yang berdiri sejak 2017 di bawah bimbingan Erick Danurahardja mendapatkan undangan eksklusif dari Madam Chang untuk latihan bersama di rooftop cabang Madam Chang Surabaya Timur. Warga dojo Xpartan yang saat itu berjumlah kurang lebih 30 orang melakukan beberapa gerakan dasar, tameshiwari dan kumite untuk mengenalkan warga Surabaya tentang beladiri full contact Kyokushin Karate.',
    ],
  },
  {
    date: '29 November 2020',
    title: 'Vortex Dojo Bali resmi bergabung Shidokan Indonesia',
    paragraphs: [
      'Cabang Bali yang dikepalai Made Senjaya, bersama para pelatih Dojo Vortex dan Brescia, Wijaya The, Andy Willy, Oktavian Eka Putra, datang ke Surabaya dan menyatakan keinginan untuk bergabung. Setelah dirapatkan dan diterima, maka cabang Bali menjadi cabang ke-2 setelah Jatim yang berdiri.',
    ],
  },
  {
    date: '31 Januari 2021',
    title: 'Kenaikan Sabuk DAN III Erick Danurahardja oleh Shihan Shin dan Honbu Jepang',
    paragraphs: [
      'Erick Danurahardja dipromosikan naik menjadi Dan III oleh Shihan Shin dan disetujui oleh honbu. Saat itu ada beberapa nama dari dojo cabang Bali yang juga dipromosikan tanpa ujian karena faktor usia dan kesediaan untuk loyal pada perguruan.',
    ],
  },
  {
    date: '4-5 September 2021',
    title: "Pelantikan kepengurusan Dojo di wilayah Jawa Tengah dan kehebatan senpai Herry S (Alm.) Peserta Ujian tertua dan terbaik",
    paragraphs: [
      'Pelantikan kepengurusan untuk dojo-dojo yang berada di Jawa Tengah, dilanjutkan keesokan harinya ujian ke Dan I yang diikuti 5 orang. Saat itu salah satu peserta bernama senpai Herry S (Alm.) mendapatkan apresiasi sebagai peserta ujian terbaik karena meskipun menjadi peserta ujian tertua, tetap mengikuti proses ujian dari awal hingga akhir dengan totalitas dan gerakan yang sangat bagus.',
    ],
  },
  {
    date: '7 November 2021',
    title: 'Kelulusan Erick Danurahardja Blackbelt Grading Kickboxing ke DAN I di PPKBI',
    paragraphs: [
      'Erick Danurahardja mengikuti "Black Belt Grading Kickboxing" dan dinyatakan lulus ke Dan I PPKBI.',
    ],
  },
  {
    date: '11-12 Desember 2021',
    title: 'Hubungan kerjasama dengan IKO Nakamura Indonesia',
    paragraphs: [
      'Erick Danurahardja, Yafed Immanuel, Abdul Halim, Adrian Herdianto, Wey Chen Lasmono mengikuti Seminar Nasional & Sertifikasi Wasit Juri oleh Sensei Jesse Chandra (Branch Chief IKO Nakamura). Dari acara inilah perguruan menjadi akrab dengan anggota IKON Indonesia dan sepakat untuk selalu menjalin hubungan kerjasama yang sehat antar 2 perguruan.',
    ],
  },
  {
    date: 'Desember 2021',
    title: 'Kyokushin Cabang Sulteng Kota Luwuk resmi bergabung kedalam Zen Kyokushin Indonesia',
    paragraphs: [
      'Cabang Sulteng, kota Luwuk yang dikepalai oleh Senpai Irwan Yulianto bergabung. Berdua dengan kohainya, Andi Lambasa datang jauh-jauh ke Surabaya untuk menyatakan diri untuk ikut bergabung di Zen Kyokushin Indonesia dan melakukan penyetaraan, sehingga tingkatan terakhir dari perguruan sebelumnya diakui, yaitu Kyu 1.',
    ],
  },
  {
    date: 'Desember 2021 - Januari 2022',
    title: 'Kecurigaan Erick Danurahardja terhadap tanda-tanda kudeta organisasi internal di Zen Kyokushin Indonesia, dan keinginannya untuk berafiliasi dengan Shidokan Indonesia',
    paragraphs: [
      'Melihat mulai adanya pergerakan untuk membelot dari beberapa pelatih dojo di luar Jatim dengan cara yang tidak hormat, dan memberikan informasi yang salah ke dojo-dojo lain di luar pulau, Erick Danurahardja sebagai satu-satunya orang yang membawa masuk Zenkyokushin ke Indonesia, mulai berpikir untuk berjaga-jaga dengan berafiliasi dengan WKA Shidokan agar apabila terjadi kudeta dari dalam, maka masih ada wadah internasional yang diakui resmi untuk menampung warga yang memiliki jiwa Bushido dan ingin tulus mengembangkan perguruan dan tidak mudah dipengaruhi.',
    ],
  },
  {
    date: 'Januari 2022',
    title: 'Erick Danurahardja resmi diterima Shidokan sebagai Shihan (Pelatih Kepala) bagi Indonesia',
    paragraphs: [
      'Sejak awal Januari mulai rutin kontak dengan salah satu legenda Kyokushin yang sudah dikenal sejak lama, Yoshiji Soeno (Tiger of Kyokushin), murid kesayangan Sosai Oyama yang diwakili juga oleh istri beliau sebagai Honbucho (manajer HQ) untuk menceritakan situasi yang terjadi di Indonesia dan keinginan Erick Danurahardja untuk dapat bergabung demi kelangsungan warga dan anak didik sebagai generasi penerus.',
      'Setelah proses panjang wawancara, background check yang menyangkut tingkatan dan prestasi, pada 31 Januari 2022 dewan sabuk hitam di honbu Ito, Shizuoka menerima Erick Danurahardja sebagai Branch President Indonesia dengan titel "Shihan" (Pelatih Kepala).',
    ],
  },
  {
    date: '19-20 Februari 2022',
    title: 'Kejurnas Open Friendship Cup IKO Nakamura Indonesia',
    paragraphs: [
      'Ketika pandemi mulai pelan-pelan terkontrol, IKO Nakamura Indonesia mengadakan Kejurnas Open Friendship Cup yang bertempat di Lippo Plaza Jember. Perguruan mengirimkan beberapa petarung terbaiknya. Erick diminta untuk menjadi arbiter mendampingi Sensei Jesse Chandra. Saat itu Adrian Herdianto menjadi juara 1, di final bertemu dengan kohai satu dojo di Xpartan, Bagus Gede Krishna yang menjadi juara 2. Di kelas remaja, perwakilan dojo Alkhairiyah yaitu Pyscilya mendapat juara 3, Sultan Zaki mendapat juara 3.',
    ],
  },
  {
    date: '9 Juni 2022',
    title: 'Erick Danurahardja Mengukuhkan Kompetensi Pelatihan Fisik dengan Mengikuti Sertifikasi "Pelatih Fisik Nasional" oleh LP2O LANKOR',
    paragraphs: [
      'Erick Danurahardja mengambil sertifikasi "Pelatih Fisik Nasional" yang diadakan oleh LP2O LANKOR untuk menambah ilmu guna menunjang program latihan fisik bagi anggota perguruan. Sebelumnya Erick juga sudah pernah mengambil sertifikasi "Personal Trainer" di RAI Institute pada 2018.',
    ],
  },
  {
    date: '9 Juni 2022',
    title: 'Ujian Sabuk Hitam dibawakan oleh Shihan dari Korea dengan Tingkat Sabuk Hitam DAN V Sertifikasi Internasional',
    paragraphs: [
      'Karena banyaknya permintaan ujian sabuk hitam secara serempak dan mengingat saat itu tingkatan Erick masih Dan III (hanya bisa menguji maksimal ke Dan I), maka perguruan mendatangkan penguji yang sudah Dan V internasional. Berdasarkan keputusan pengurus, perguruan mengundang Shihan Shin Seoung Sub dan Mr. Choi Junhee (Vice President WAKO Korea saat itu).',
      'Beberapa nama yang dinyatakan lulus setelah ujian:',
    ],
    list: [
      'Abdul Aziz naik ke Dan III',
      'Ivan Andinata naik ke Dan III',
      'Oktavian Eka Putra naik ke Dan II',
      'Melkianus Raharjo Jemahun naik ke Dan I',
      'Amir naik ke Dan I',
      'Steven Stevanus naik ke Dan I',
    ],
  },
  {
    date: '30-31 Juli 2022',
    title: 'Kejuaraan TIGER KING Kickboxing Championship Malang di Bawah Naungan Shidokan dengan Dukungan Knock Out Boxing Camp',
    paragraphs: [
      'Untuk pertama kalinya 3 orang fighter membawa nama Shidokan di kejuaraan TIGER KING Kickboxing Championship yang diselenggarakan di kota Malang. Dibantu persiapan ekstra oleh Knock Out Boxing Camp pimpinan Senpai Bernard Purnomo, ketiga orang fighter, Adrian Herdianto, Wey Chen Lasmono dan Gregorio Diovani pulang dengan membawa medali perunggu.',
    ],
  },
  {
    date: '1 Oktober 2022',
    title: 'Kejuaraan Star of Kyokushin di Maspion Square Surabaya dan Penerbitan Sertifikat Instruktur & Wasit Juri dari Honbu Shidokan Jepang',
    paragraphs: [
      'Mengikuti Kejuaraan Star of Kyokushin yang bertempat di Maspion Square Surabaya. Santoso menang telak ippon dan mendapat juara 1 di kelasnya. Bagus Gede Krishna mendapat juara 2 setelah bertemu di final dengan Marfin Alfonso, sedangkan Irfan Hardono mendapat juara 3. Benedict Willem Troy mendapatkan juara 2.',
      'Dari dojo Alkhairiyah, Pyscilya dan Sultan Zaki mendapatkan juara 2, Pycho mendapatkan juara 3. Dari dojo Ampel, Kudratullah (sekarang menjadi pelatih dojo Darul Iman Situbondo) mendapat juara 3.',
      'Di tanggal yang sama, Honbu Shidokan menerbitkan sertifikat instruktur dan wasit juri kepada 3 orang yang sudah dinilai layak, yaitu Adrian Herdianto, Darwin Kurniawan dan Oktavian Eka Putra.',
    ],
  },
  {
    date: 'November 2022',
    title: 'Erick Danurahardja Diundang ke Korea Sebagai Juri Turnamen Internasional Korea Dream Cup ke-17 dan Berkesempatan Latihan Bersama 40 Men Kumite',
    paragraphs: [
      'Erick Danurahardja mendapat undangan untuk menjadi juri turnamen Korea Dream Cup yang ke-17. Beberapa organisasi karate full contact lain seperti Byakuren, Kyokushin, Yushikaikan, Shinkyokushin juga mengirimkan atlit terbaik mereka. Negara lain yang berpartisipasi adalah Jepang dan Nepal. Dari acara ini, Erick terinspirasi untuk membuat Dream Cup di Indonesia.',
      'Malam sebelum hari pertandingan, Erick berkesempatan untuk makan malam bersama Kazuyuki Hasegawa dan mendapatkan tawaran untuk latihan bersama di bulan April 2023 di honbu Sosai Oyama di Ikebukuro, tempat lahirnya Kyokushin dan juga para fighter hasil uchi deshi. Hasegawa juga memerintahkan agar Erick siap untuk melakukan kumite 40 kali dan apabila lolos, maka akan dipromosikan untuk naik tingkatan.',
      'Sebelum kembali ke tanah air, Erick menyempatkan diri untuk berkunjung di dojo Shihan Howon Jung di Seoul dan berdiskusi banyak tentang karate. Sebelum berpamitan, Erick mendapat satu setel dogi dari Shihan Jung sebagai kenang-kenangan.',
    ],
  },
  {
    date: 'Desember 2022',
    title: 'Pertandingan Kyokushin Grand Prix 5 di Royal Plaza Surabaya, serta kemenangan Matthew Jeremy didalam Kompetisi Lindu Aji XVII di Semarang',
    paragraphs: [
      'Mengikuti Kyokushin Grand Prix 5 yang diadakan di Royal Plaza Surabaya. Bagus Gede Krishna menempati peringkat 2 setelah kembali bertemu dengan Marfin Alfonso di final dengan Alfonso masih tetap mempertahankan kemenangan sebelumnya.',
      'Santoso kembali menjadi juara 1 dengan kemenangannya di final melawan Daniel Tjakra yang masih satu dojo. Jemima Rumiza Diovani memenangkan kategori one match putri dewasa, sedangkan di kategori anak-anak putri dimenangkan oleh Hadijah sebagai juara 1. Sultan Zaki menempati juara 1 di kelas remaja.',
      'Setelah mendaftarkan 2 nama sebelumnya untuk diseleksi mengikuti Lindu Aji XVII di Semarang, Matthew Jeremy terpilih untuk berlaga dan berhasil memenangkan pertandingan dengan TKO.',
    ],
  },
  {
    date: '23 Desember 2022',
    title: 'Erick Danurahardja: Menghadapi Kudeta Perguruan di Zen Kyokushin Indonesia dan Menjaga Jiwa Budo',
    paragraphs: [
      'Apa yang sudah Erick prediksi akhirnya terjadi. Sebagian besar instruktur membelot, memisahkan diri lalu memprovokasi tiap-tiap instruktur agar berganti perguruan menjadi Kyokushin lokal tanpa afiliasi ke Jepang, dengan dalih tidak ingin dipimpin oleh Kazuyuki Hasegawa dengan aturan-aturan yang tegas. Rencana kudeta ini sudah direncanakan selama hampir setahun dengan target agar Erick dikeluarkan dari perguruan.',
      'Dengan tegas dan cepat, Erick segera melaporkan hal ini ke honbu, lalu Board Director sepakat untuk membekukan nama-nama pembelot yang sudah menyandang sabuk hitam dan dilaporkan ke Branch Chief Association. Hal ini akan membuat nama-nama yang sudah di-black list tidak akan pernah diterima di perguruan manapun yang berafiliasi dengan asosiasi besar di Jepang tersebut.',
      'Saat itu hanya segelintir nama-nama anggota senior dan instruktur yang masih memiliki jiwa ksatria, berani dengan tegas menolak tawaran manis demi pencitraan semata. Mereka adalah Oktavian Eka Putra, Yafed Immanuel, Achmad Noer Hidayat, Abdul Halim, Irwan Yulianto. Dari sini Erick belajar bahwa kuantitas juga harus diimbangi dengan kualitas.',
    ],
  },
  {
    date: '14-15 Januari 2023',
    title: 'Gashuku perdana diadakan dengan semangat baru, babak baru bersama warga yang loyal, disiplin dan berjiwa ksatria',
    paragraphs: [
      'Bertempat di UTC (Ubaya Training Center) Trawas, acara berlangsung selama 2 hari untuk menjalin silaturahmi antar warga perguruan secara nasional. Erick menyampaikan misi yang akan dicapai pada tahun 2023, yaitu mengadakan pertandingan skala nasional dan internasional serta menghimbau kepada seluruh warga untuk tetap teguh dengan pendirian sebagai karateka yang sejati.',
      'Tema perguruan untuk 2023 adalah menjaga keutuhan perguruan, solid antar dojo dan menata segala sesuatu dari awal dengan semangat yang baru.',
      'Hari kedua ditutup dengan ujian yang diawasi dan dievaluasi oleh Erick Danurahardja dan Sensei Achmad Noer Hidayat dengan hasil:',
    ],
    list: [
      'William Adriano naik ke Dan I',
      'Dedy Setio naik ke Dan I',
      'Adrian Herdianto naik ke Kyu I',
    ],
  },
  {
    date: '31 Januari 2023',
    title: 'Momentum 1 Tahun Shidokan di Indonesia: Johan Samuel Nangin Bergabung, Bali Perkuat Sinergi dengan Shidokan Indonesia',
    paragraphs: [
      'Bertepatan pas dengan 1 tahunnya Erick membawa masuk Shidokan ke Indonesia, Johan Samuel Nangin dari SoKyokushin menyatakan diri untuk bergabung. Provinsi Bali menambah amunisi lagi untuk saling bersinergi dengan Sensei Oktavian Putra.',
    ],
  },
  {
    date: '18 Maret 2023',
    title: 'Santoso Berlaga di One Pride MMA: Menang dengan hasil KO 17 Detik!!',
    paragraphs: ['Santoso berlaga di One Pride MMA dengan hasil menang KO hanya dalam 17 detik.'],
  },
  {
    date: '19 Maret 2023',
    title: 'Mengikuti Kejuaraan MMA Amatir: Jemima Diovani Juara 1 Kategori Putri dan Berhak Mendapatkan Tiket & Akomodasi Penuh ke Malaysia',
    paragraphs: [
      'Mengirimkan Jemima Diovani dan Benedict Willem Troy di kejuaraan MMA amatir. Jemima menang dengan submission dan mendapatkan title fighter terbaik kategori putri, berhak mendapatkan tiket serta akomodasi penuh untuk ke Malaysia.',
    ],
  },
  {
    date: 'April 2023',
    title: 'Erick Danurahardja Hadir ke Jepang mengikuti Latihan Bersama 40 Men Kumite secara Internasional, dan Berhasil Naik ke tingkat Ban Hitam DAN IV',
    paragraphs: [
      'Erick berangkat ke Jepang seorang diri dengan beberapa agenda khusus, salah satunya adalah menjawab tantangan dari Kazuyuki Hasegawa untuk membuktikan kemampuan melakukan 40x kumite dan 16 Kata tingkat atas.',
      'Bertempat di honbu Sosai Oyama di Ikebukuro, Erick benar-benar diuji kemampuan bersama dengan banyak sekali karateka-karateka dari negara lain seperti Australia, Chile, Pakistan, India, Korea, Iran, Finlandia, Romania, Jerman, China.',
      '"Bisa dihitung dengan jari orang Indonesia yang pernah masuk dan berlatih disana, sungguh membahagiakan dan tidak disangka saya berada disini sekarang. Ini benar-benar mimpi yang terjadi." — Erick Danurahardja, saat sambutan singkat kepada seluruh karateka dari berbagai belahan dunia disana.',
      'Dengan berakhirnya acara dari pagi sampai malam di Ikebukuro, Erick dengan membanggakan mencapai ke tingkat Dan IV disaksikan oleh seluruh karateka yang hadir.',
    ],
  },
  {
    date: 'Mei 2023',
    title: 'Kunjungan Erick Danurahardja ke Honbu Shidokan: Belajar dari Sosui Yoshiji Soeno dan Mempersiapkan Seminar Internasional di Indonesia',
    paragraphs: [
      'Setelah beberapa minggu di Tokyo, Erick berkunjung ke Ito, Shizuoka untuk berkunjung ke honbu Shidokan. Sosui menceritakan bagaimana dulu ketika muda berguru dengan Sosai Oyama hingga bagaimana beliau mendapat julukan "Tiger of Kyokushin".',
      'Agenda terpenting dalam kunjungan ke Ito adalah membahas AD ART perguruan yang meliputi hak dan tanggung jawab Erick selaku satu-satunya Branch President untuk Indonesia serta aturan-aturan dari pusat yang wajib dipatuhi.',
      'Dilanjutkan dengan obrolan ringan membahas persiapan kunjungan Yoshiji Soeno di Indonesia pada bulan Juni 2023 dalam rangka seminar dan turnamen internasional.',
    ],
  },
  {
    date: '24-25 Juni 2023',
    title: 'Penutupan Kunjungan Honbu Shidokan di Indonesia: Evaluasi, Pengakuan, dan Keberhasilan Bali Open Tournament oleh Sosui Yoshiji Soeno',
    paragraphs: [
      'Shidokan Bali Open Tournament & Seminar digelar. Sensei Oktavian Eka Putra dibantu dengan Sensei Johan Nangin menjadi tuan rumah dan panitia acara akbar ini. Sosui Soeno dan Honbucho Iuliana membawa 3 top fighter mereka, Shingo Yokoyama, Kiichi Yamada dan Yusei Hirasawa, turut disertai Shihan Naotaka Tamura dan Shihan Takashi Saito beserta istri.',
      'Seminar dilangsungkan di Universitas Dhyana Pura, diikuti 50 peserta dari berbagai perguruan. Acara ditutup dengan penyetaraan dan pengakuan tingkatan sebagai Kuro Obi Shidokan Internasional kepada:',
    ],
    list: [
      'Erick Danurahardja (Dan IV)',
      'Johan Samuel Nangin (Dan II)',
      'Darwin Kurniawan (Kyu I naik ke Dan I)',
      'Gabriel Constantine Nangin (Kyu I naik ke Dan I)',
    ],
  },
  {
    date: '26 Juni 2023',
    title: 'House of Lion Dojo Indonesia dibawah Dedikasi Sensei Johan Nangin diresmikan secara langsung oleh Sosui Yoshiji Soeno yang bertempat di Sanur, Bali',
    paragraphs: [
      'House of Lion yang merupakan dedikasi Sensei Johan Nangin terhadap karate, akhirnya diresmikan secara langsung oleh Sosui Yoshiji Soeno di Sanur, Bali, sebagai bagian dari WKA The Shidokan.',
    ],
  },
  {
    date: '27 Juni 2023',
    title: 'Penutupan Kunjungan Honbu Shidokan di Indonesia: Hasil Evaluasi dan Pengakuan dari Sosui Yoshiji Soeno',
    paragraphs: [
      'Hari terakhir rombongan Honbu berada di Indonesia untuk pulang kembali ke Jepang. Beberapa hasil evaluasi dan penyampaian dari Sosui:',
    ],
    list: [
      'Mengajak Shidokan Indonesia untuk bertanding di kejuaraan dunia tiap tahunnya di Jepang',
      'Mempercayakan sepenuhnya pengujian tingkatan kepada Erick Danurahardja sampai maksimal ke Dan III',
      'Adrian Herdianto dinaikkan ke Dan I atas dasar kemampuan bertarung dan jiwa sportif yang dimiliki, disetujui Honbucho Iuliana, Shihan Tamura dan Shihan Saito',
    ],
  },
  {
    date: '21 Juli 2023',
    title: 'Migrasi Lion Dojo Sokyokushin ke Shidokan: Awal Baru untuk Lion Dojo Surabaya',
    paragraphs: [
      'Berawal dari keinginan instruktur Lion Dojo Sokyokushin yang ingin bermigrasi menjadi Lion Dojo Shidokan, Erick Danurahardja menerima baik dengan tangan terbuka. Namun karena hasutan dan fitnah oknum yang sakit hati, dalam 2 hari rencana bergabung tersebut dibatalkan sepihak.',
      'Beberapa warga yang kecewa dengan pembatalan mendadak ini, termasuk Peter Drago yang tetap ingin memindahkan kedua anaknya ke Shidokan, mendorong Erick membuka dojo baru di barat Surabaya, dipimpin langsung olehnya. Nama dojo tetap menggunakan Lion Dojo sebagai penghormatan pada rintisan Sensei Johan Nangin.',
      'Beberapa minggu kemudian, juara nasional Sokyokushin Indonesia, Marfin Alfonso, juga menarik diri dan pindah ke Shidokan sebagai instruktur, hingga akhirnya dinilai layak menjadi pelatih utama Lion Dojo dengan titel Shihandai (asisten pelatih kepala).',
    ],
  },
  {
    date: 'Agustus 2023',
    title: 'Kejurnas Open IKO Nakamura (IKON) Tahun 2023',
    paragraphs: [
      'Mengikuti Kejurnas Open IKON 2023. Erick kembali menjadi arbiter bersama tuan rumah, Sensei Jesse Chandra. Di kelas remaja, Sultan Zaki dan Pyscilya mendapat peringkat 2, Risma mendapat juara 3, Ahmad Bayu di kelas anak-anak mendapat juara 1, sedangkan Queen menjadi pemenang dalam one match.',
    ],
  },
  {
    date: 'September 2023',
    title: 'Kompetisi PORPROV Cabor Kickboxing Jombang: Jemima Rumiza Diovani Menang Medali Emas Mewakili Kota Surabaya',
    paragraphs: [
      'Jemima Rumiza Diovani mewakili kota Surabaya memenangkan medali emas PORPROV cabor Kickboxing di kota Jombang.',
    ],
  },
  {
    date: '4-5 November 2023',
    title: 'Kejuaraan Open Samurai Dream Cup di Home Pro Pakuwon Mall Surabaya',
    paragraphs: [
      'Perguruan menggelar kejuaraan open dengan nama Samurai Dream Cup, diikuti oleh 10 perguruan dengan 160 peserta. Darwin Kurniawan sebagai ketua panitia sukses membuat event berjalan dengan sangat menarik.',
      'Berbeda dengan event karate nasional pada umumnya, ada Duathlon Match (full contact karate ronde 1, kickboxing ronde 2) dan Epic Fight — pertandingan open weight antara Gabriel Jericho Nangin (68kg, Shidokan) melawan Rico Alghazali (130kg, Kyokushin Bushido).',
    ],
  },
  {
    date: '18 November 2023',
    title: 'Special Training with Satoshi Yui bersama dengan Perkumpulan Pembinaan Mental Kyokushin (PMK)',
    paragraphs: [
      'Mendapat undangan dari Perkumpulan Pembinaan Mental Kyokushin untuk mengikuti acara Special Training with Satoshi Yui. Shihan Satoshi Yui dulu pernah menjadi peraga dalam video kihon, ido geiko dan kata semasa di WKO Shinkyokushinkai, yang menjadi dasar pembelajaran Erick ketika masih di WKOSI.',
    ],
  },
  {
    date: '23-24 Februari 2024',
    title: 'Gashuku II Indonesia Dilaksanakan, dilanjut dengan Ujian Kenaikan Sabuk Hitam di Villa Sahabat Trawas',
    paragraphs: [
      'Gashuku II dilaksanakan di Villa Sahabat, Trawas. Erick menerangkan bahwa tema 2024 adalah "menciptakan sejarah" — dimulai dengan keberangkatan Sensei Achmad Noer Hidayat dan Shihandai Marfin Alfonso ke Jepang untuk ujian dan bertanding di 2nd All Japan Tournament.',
      'Gashuku ditutup pada hari ke-2 dengan ujian sabuk hitam yang diikuti lebih banyak peserta dari tahun sebelumnya, termasuk 3 orang dari cabang Luwuk, Sulawesi Tengah. Hasil ujian:',
    ],
    list: [
      'Abdul Halim naik ke Dan II',
      'Laode Suwarno Nur naik ke Dan I',
      'Rahmat Syahroni S Larau naik ke Dan I',
      'Mohammad Agung Saleh naik ke Dan I',
      'Marfin Alfonso Teriubun naik ke Kyu 1',
      'Yehezkiel Dessy Wijaya naik ke Kyu 1',
    ],
  },
  {
    date: 'Maret 2024',
    title: 'Adnan Yusuf Mamonto dari Bitung, Sulawesi Utara Resmi Bergabung dengan Shidokan Indonesia dengan nama Dojo Ronin',
    paragraphs: [
      'Adnan Yusuf Mamonto dari Bitung, Sulawesi Utara bergabung dengan perguruan dengan nama dojo Ronin.',
    ],
  },
  {
    date: 'April 2024',
    title: 'Perguruan Pertama Kali Memberangkatkan 2 Anggotanya ke Jepang untuk Bertanding serta Mengikuti Kenaikan Ujian Sabuk Hitam',
    paragraphs: [
      'Pembuktian kemandirian perguruan dengan memberangkatkan Sensei Achmad Noer Hidayat dan Shihandai Marfin Alfonso Teriubun ke Jepang — pengalaman pertama bagi mereka berdua menginjakkan kaki di negeri Sakura. Sensei Achmad Noer mengikuti ujian, melakukan serangkaian kata tingkat atas dan kumite sebanyak 40 kali dan dinyatakan lulus ke Dan IV Internasional.',
    ],
  },
  {
    date: '3 Mei 2024',
    title: 'Pergantian Kepemimpinan di Sulteng: Irwan Yulianto Mundur, Laode Suwarno Nur Memimpin dengan Dojo Baru "Cheetah"',
    paragraphs: [
      'Irwan Yulianto mengundurkan diri dari perguruan. Laode Suwarno Nur mengajukan diri untuk menggantikan dan menjadi ketua Pengprov Sulteng dengan dojo baru yang bernama Dojo Cheetah.',
    ],
  },
  {
    date: '25-26 Mei 2024',
    title: 'Perguruan Mendatangkan Kancho Yoshii Okubo, Shihan Takashi Saito dan Shihan Naotaka Tamura sebagai Guest Honor di Acara Piala Raja Yogyakarta',
    paragraphs: [
      'Kancho Yoshii Okubo, Shihan Takashi Saito dan Shihan Naotaka Tamura hadir sebagai guest honor. Keesokan harinya, Kancho memberikan seminar di Candi Prambanan dan mengajarkan kata ciptaannya, Byakko ("macan putih"). Erick berkesempatan belajar Bo Kata langsung dari Kancho Okubo di rooftop Hotel Royal Malioboro.',
    ],
  },
  {
    date: '2 Juni 2024',
    title: 'Erick dan Musashi Project: Seminar Bersama Shihan Akira Masuda, Sparring Kyokushin Do, dan Pengakuan Makna Bushido',
    paragraphs: [
      'Erick diminta secara khusus terlibat dalam Musashi Project, organizer seminar dan kejuaraan karate full contact yang didirikan Randy Tumewa. Pada event perdana ini, Musashi Project mendatangkan Shihan Akira Masuda, finalis kejuaraan dunia 1991 dan salah satu praktisi Kyokushin yang sukses menyelesaikan 100 man kumite di era Mas Oyama.',
      'Di akhir sesi, Shihan Masuda menunjuk Erick secara spontan untuk sparring dengan sistem Kyokushin Do miliknya. Sebelum kembali ke Jepang, Shihan Masuda berpesan: "Kamu memiliki kemampuan bertarung yang sangat baik kemarin, saya melihat bukan hanya dari aspek bertarungnya, tapi juga memahami makna Bushido dan penerapannya dalam pertarungan."',
    ],
  },
  {
    date: '30 Juni 2024',
    title: 'Erick menjadi Wasit dalam Turnamen IKIGAI Jakarta dan Kunjungan ke Kantor KEMENPORA',
    paragraphs: [
      'Erick mendapatkan undangan dari IKO Nakamura Indonesia untuk menjadi wasit dalam turnamen IKIGAI di Jakarta. Perguruan mengirimkan Benedict Willem Troy, Gabriel Constantine Nangin dan Mikael Jericho Nangin. Keesokan harinya Erick berkunjung ke kantor KEMENPORA untuk mendapatkan rekomendasi keabsahan identitas perguruan.',
    ],
  },
  {
    date: 'September - Oktober 2024',
    title: 'Rangkaian Acara Besar di Jepang: Shido No Sato, Ulang Tahun ke-77 Sosui Soeno, dan The 44th Shidokan World Open Championship',
    paragraphs: [
      'Erick Danurahardja, Djohan Samuel Nangin, Dedy Setio, Jemima Rumiza Diovani, Gabriel Constantine Nangin, dan Mikhael Jericho Nangin berangkat ke Jepang mengikuti serangkaian acara berikut:',
    ],
    sections: [
      {
        heading: 'Shido No Sato Completion Commemoration Party',
        bullets: [
          'Acara seremonial peresmian taman di sebelah Honbu berisi monumen untuk menghormati Mas Oyama, Ikki Kajiwara, Ryuji Murakami, Yoshii Okubo, Kenichi Sato, Kouichiro Yamada, dan Kiichi Yamada.',
          'Sosui Soeno memimpin pembacaan janji dojo dan memberikan penghargaan kepada beberapa Shihan senior, dihadiri tamu kehormatan termasuk Kancho Hidenori Ashihara dan Noriaki Sato.',
        ],
      },
      {
        heading: 'Sosui Yoshiji Soeno 77th Birthday Party, Hotel Ravie Kawaryo',
        bullets: [
          'Hampir 200 tamu undangan hadir merayakan ulang tahun Sosui Soeno. Erick Danurahardja mewakili Shidokan Indonesia bersama Branch President dari Perancis, Karibia, dan Hong Kong.',
          'Erick berkesempatan berada di samping Kancho Hidenori Ashihara saat tradisi Kagami Biraki, dan memberikan hadiah action figure Sosui Soeno beserta sarung tinju bertema harimau.',
        ],
      },
      {
        heading: 'Training at Shido Hamamatsu Soeno',
        bullets: [
          'Berlatih bersama di dojo Shihan Yamada di Hamamatsu — menurut Erick salah satu dojo paling bagus yang pernah dilihat, lengkap dengan ruangan oksigen untuk kebutuhan atlit.',
          'Erick diminta duduk seiza bersama Shihan Yamada membuka upacara latihan, dilanjutkan kihon, Shikon No Kata, dan 20x kumite bergantian.',
        ],
      },
      {
        heading: '2024 Club Quattro Tour — Konser Kakuda Nobuaki',
        bullets: [
          'Erick, Djohan dan Jemima menonton konser legenda K1 Kakuda Nobuaki di Osaka dan berkesempatan foto bersama setelah acara.',
        ],
      },
      {
        heading: 'WKA The Shidokan International Seminar, Yokohama Budokan',
        bullets: [
          'Sosui Soeno memimpin langsung gerakan kihon. Jemima diminta tampil di depan peserta seminar karena gerakannya dinilai sangat bagus, Mikhael Jericho membawakan Kata Yanstu, dan Gabriel Constantine melakukan Go Hon Geri bersama Kiichi Yamada dan Yusei Hirasawa.',
          'Djohan Nangin dipromosikan naik ke Dan III, sedangkan Shihan Tamura dipromosikan ke Dan VI.',
        ],
      },
      {
        heading: 'The 44th Shidokan World Open Championship',
        bullets: [
          'Diikuti lebih dari 200 kompetitor dari berbagai negara. Jemima Diovani berhasil menyabet juara 1 — sejarah pertama atlit wanita kategori dewasa Indonesia mendapat nomor di tingkat internasional.',
          'Di kategori kata, Mikhael Jericho mendapat juara 1 dengan Kata Byakko, Gabriel Constantine mendapat juara 2 dengan Shikon No Kata.',
        ],
      },
    ],
  },
  {
    date: '10 November 2024',
    title: 'WBC Muay Thai Indonesia "Rise of The Local Hero"',
    paragraphs: [
      'Perguruan mencoba debut pertama di kategori Muay Thai untuk Jemima Diovani dan Sultan Zaki. Walau keduanya belum mendapat medali, Erick sebagai pelatih kepala tetap bangga dan mengingatkan bahwa kalah ataupun menang adalah hal yang sangat wajar.',
    ],
  },
  {
    date: '23 November 2024',
    title: 'Darwin Kurniawan Mengundurkan Diri dari Perguruan',
    paragraphs: ['Darwin Kurniawan mengundurkan diri dari perguruan.'],
  },
  {
    date: '30 November 2024',
    title: 'Audisi Petarung oleh One Pride Championship: Jemima Diovani Dinyatakan Lolos dengan Kategori B',
    paragraphs: [
      'Jemima Diovani mengikuti "Audisi Petarung" yang diadakan oleh One Pride Championship dan dinyatakan lolos dengan kategori B.',
    ],
  },
]
