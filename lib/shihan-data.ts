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

export const quickFactsEn: QuickFact[] = [
  { label: 'Position', value: 'Shihan & Branch President — Shidokan Indonesia' },
  { label: 'Rank', value: 'DAN IV — Shidokan International' },
  { label: 'Started Training', value: 'Kyokushin Karate since 2003' },
  { label: 'Black Belt', value: 'Shodan 2015 (Shihan Mas Gufron Heru, Surabaya)' },
  { label: 'Achievements', value: '1st Place, 20th WKOSI National Championship 2017 & Indonesia Open (IFKA) 2019' },
  { label: 'International', value: 'Indonesia representative — 12th World Open Karate Tournament, Tokyo' },
  { label: 'Certifications', value: 'National Physical Trainer (LP2O LANKOR), Personal Trainer (RAI Institute)' },
]

export const bioParagraphsEn: string[] = [
  'The organization was founded by Erick Danurahardja, a Kyokushin Karate practitioner since 2003, who at the time was a member of Kyokushin Karate Indonesia (KKI) led by Shihan JB Sujoto.',
  'In 2008, KKI joined Shinkyokushinkai led by Kenji Midori and became the World Karate Organization Shinkyokushin Indonesia (WKOSI).',
  'Erick Danurahardja took his first black belt exam in 2015 under Shihan Mas Gufron Heru in Surabaya and passed to Shodan.',
  'He competed in the 20th WKOSI National Championship in 2017 and won 1st place in the men\'s open class.',
  'In 2019 he achieved Nidan rank after being tested directly by Shihan JB Sujoto through 10 rounds of kumite in Bandungan.',
  'That same year he also won 1st place at the Indonesia Open Tournament held by the Indonesia Fullcontact Karate Association (IFKA), followed by a gold medal at Tarung Bebas Indonesia (TBI), and finally represented Indonesia as an athlete at the 12th World Open Karate Tournament (WOKT) in Tokyo, Japan.',
  'Erick Danurahardja has also won several Muay Thai and kickboxing exhibition matches, and whenever he travels — locally or abroad — he always makes time to find a nearby dojo or camp to train and build relationships globally. Countries he has trained in include Singapore, Vietnam, Thailand, Korea, and Japan.',
  'Whenever a legendary practitioner such as Kenji Midori, Shinichi Sotodate, Akira Masuda, Satoshi Yui, Yoshiji Soeno, Kaoru Okubo, Trainer Gae, or Saenchai holds a seminar in Indonesia, Erick always makes time to attend and learn. For him, knowledge has no limits and must constantly be sought from great people whose accomplishments in their youth are widely recognized.',
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

export const timelineEn: TimelineEntry[] = [
  {
    date: 'September 18, 2020',
    title: 'Training and curriculum standardization process under the guidance of Shihan Shin from Korea',
    paragraphs: [
      'After leaving WKO Shinkyokushinkai Indonesia, Erick Danurahardja underwent a training and curriculum standardization process under the guidance of Shihan Shin from Korea. On September 18, 2020, he received recognition as branch chief of IKO World Zenkyokushin in the form of a Branch Chief certificate issued by the honbu under Kazuyuki Hasegawa (winner of the 2nd All Japan Karate Open Tournament), Branch Chief of Aichi Prefecture, who was appointed directly by Sosai Oyama at the time.',
    ],
  },
  {
    date: 'November 14, 2020',
    title: 'Madame Chang Rooftop',
    paragraphs: [
      'Under the new banner, Xpartan dojo, established since 2017 under the guidance of Erick Danurahardja, received an exclusive invitation from Madam Chang for a joint training session on the rooftop of the Madam Chang East Surabaya branch. Xpartan dojo members, roughly 30 people at the time, performed basic movements, tameshiwari, and kumite to introduce the people of Surabaya to full-contact Kyokushin Karate.',
    ],
  },
  {
    date: 'November 29, 2020',
    title: 'Vortex Dojo Bali officially joins Shidokan Indonesia',
    paragraphs: [
      'The Bali branch, headed by Made Senjaya, together with the instructors of Dojo Vortex and Brescia — Wijaya The, Andy Willy, and Oktavian Eka Putra — came to Surabaya to express their intent to join. After discussion and acceptance, the Bali branch became the 2nd branch established after East Java.',
    ],
  },
  {
    date: 'January 31, 2021',
    title: "Erick Danurahardja's DAN III belt promotion by Shihan Shin and Honbu Japan",
    paragraphs: [
      'Erick Danurahardja was promoted to Dan III by Shihan Shin and approved by the honbu. At that time several names from the Bali branch dojo were also promoted without examination due to age and their willingness to remain loyal to the organization.',
    ],
  },
  {
    date: 'September 4-5, 2021',
    title: 'Inauguration of dojo management in the Central Java region, and the excellence of senpai Herry S (late), oldest and best exam participant',
    paragraphs: [
      'Inauguration of management for dojos located in Central Java, followed the next day by the Dan I exam attended by 5 people. During that exam, a participant named senpai Herry S (late) received appreciation as the best exam participant because, despite being the oldest participant, he followed the entire examination process from start to finish with full commitment and excellent movements.',
    ],
  },
  {
    date: 'November 7, 2021',
    title: "Erick Danurahardja's Kickboxing Black Belt Grading pass to DAN I at PPKBI",
    paragraphs: [
      'Erick Danurahardja took part in the "Black Belt Grading Kickboxing" and was declared to have passed to Dan I PPKBI.',
    ],
  },
  {
    date: 'December 11-12, 2021',
    title: 'Cooperative relationship with IKO Nakamura Indonesia',
    paragraphs: [
      'Erick Danurahardja, Yafed Immanuel, Abdul Halim, Adrian Herdianto, and Wey Chen Lasmono took part in the National Seminar & Referee Certification by Sensei Jesse Chandra (Branch Chief IKO Nakamura). This event brought the organization closer to IKON Indonesia members, and both organizations agreed to always maintain a healthy cooperative relationship.',
    ],
  },
  {
    date: 'December 2021',
    title: 'Kyokushin Central Sulawesi Branch, Luwuk City, officially joins Zen Kyokushin Indonesia',
    paragraphs: [
      'The Central Sulawesi branch, in Luwuk City, headed by Senpai Irwan Yulianto, joined. Together with his kohai Andi Lambasa, he traveled all the way to Surabaya to declare their intent to join Zen Kyokushin Indonesia and undergo rank equivalency, so that their previous organization\'s last rank, Kyu 1, was recognized.',
    ],
  },
  {
    date: 'December 2021 - January 2022',
    title: "Erick Danurahardja's suspicion of signs of an internal organizational coup within Zen Kyokushin Indonesia, and his desire to affiliate with Shidokan Indonesia",
    paragraphs: [
      'Seeing the beginnings of a movement among several dojo trainers outside East Java to defect in a disrespectful manner, and spreading false information to other dojos outside the island, Erick Danurahardja — as the sole person who brought Zenkyokushin into Indonesia — began to think about safeguarding the organization by affiliating with WKA Shidokan. This way, should an internal coup occur, there would still be an officially recognized international body to house members with a genuine Bushido spirit who wished to sincerely grow the organization and not be easily swayed.',
    ],
  },
  {
    date: 'January 2022',
    title: 'Erick Danurahardja officially accepted by Shidokan as Shihan (Head Instructor) for Indonesia',
    paragraphs: [
      'Starting in early January, he began regularly contacting one of the long-known Kyokushin legends, Yoshiji Soeno (Tiger of Kyokushin), a favored student of Sosai Oyama, also represented by his wife as Honbucho (HQ manager), to explain the situation in Indonesia and Erick Danurahardja\'s wish to join for the sake of the continuity of the members and students as the next generation.',
      'After a lengthy process of interviews and background checks regarding rank and achievements, on January 31, 2022, the black belt council at the honbu in Ito, Shizuoka, accepted Erick Danurahardja as Branch President of Indonesia with the title "Shihan" (Head Instructor).',
    ],
  },
  {
    date: 'February 19-20, 2022',
    title: 'IKO Nakamura Indonesia Open Friendship Cup National Championship',
    paragraphs: [
      'As the pandemic gradually came under control, IKO Nakamura Indonesia held the Open Friendship Cup National Championship at Lippo Plaza Jember. The organization sent several of its best fighters. Erick was asked to serve as arbiter alongside Sensei Jesse Chandra. Adrian Herdianto took 1st place, meeting fellow Xpartan dojo member Bagus Gede Krishna, who took 2nd, in the final. In the youth class, Alkhairiyah dojo representative Pyscilya took 3rd place, and Sultan Zaki took 3rd place.',
    ],
  },
  {
    date: 'June 9, 2022',
    title: 'Erick Danurahardja affirms his physical training competence by completing the "National Physical Trainer" certification by LP2O LANKOR',
    paragraphs: [
      'Erick Danurahardja obtained the "National Physical Trainer" certification held by LP2O LANKOR to expand his knowledge in support of the organization\'s physical training programs. He had previously earned a "Personal Trainer" certification at RAI Institute in 2018.',
    ],
  },
  {
    date: 'June 9, 2022',
    title: 'Black belt examination conducted by a Shihan from Korea, with internationally certified Dan V rank',
    paragraphs: [
      'Due to the high number of simultaneous black belt exam requests, and given that Erick\'s rank at the time was still Dan III (only able to examine up to Dan I), the organization brought in an internationally certified Dan V examiner. By decision of the management, the organization invited Shihan Shin Seoung Sub and Mr. Choi Junhee (then Vice President of WAKO Korea).',
      'Several names who passed the examination:',
    ],
    list: [
      'Abdul Aziz promoted to Dan III',
      'Ivan Andinata promoted to Dan III',
      'Oktavian Eka Putra promoted to Dan II',
      'Melkianus Raharjo Jemahun promoted to Dan I',
      'Amir promoted to Dan I',
      'Steven Stevanus promoted to Dan I',
    ],
  },
  {
    date: 'July 30-31, 2022',
    title: 'TIGER KING Kickboxing Championship Malang under the Shidokan banner, supported by Knock Out Boxing Camp',
    paragraphs: [
      'For the first time, 3 fighters carried the Shidokan name at the TIGER KING Kickboxing Championship held in the city of Malang. With extra preparation support from Knock Out Boxing Camp, led by Senpai Bernard Purnomo, the three fighters — Adrian Herdianto, Wey Chen Lasmono, and Gregorio Diovani — returned home with bronze medals.',
    ],
  },
  {
    date: 'October 1, 2022',
    title: 'Star of Kyokushin Championship at Maspion Square Surabaya, and issuance of Instructor & Referee certificates from Honbu Shidokan Japan',
    paragraphs: [
      'Competed in the Star of Kyokushin Championship held at Maspion Square Surabaya. Santoso won decisively by ippon and took 1st place in his class. Bagus Gede Krishna took 2nd place after meeting Marfin Alfonso again in the final, while Irfan Hardono took 3rd place. Benedict Willem Troy took 2nd place.',
      'From Alkhairiyah dojo, Pyscilya and Sultan Zaki took 2nd place, and Pycho took 3rd place. From Ampel dojo, Kudratullah (now an instructor at Darul Iman Situbondo dojo) took 3rd place.',
      'On the same date, Honbu Shidokan issued instructor and referee certificates to three individuals deemed qualified: Adrian Herdianto, Darwin Kurniawan, and Oktavian Eka Putra.',
    ],
  },
  {
    date: 'November 2022',
    title: 'Erick Danurahardja invited to Korea as a judge for the 17th Korea Dream Cup International Tournament, and the opportunity to train in a 40-man kumite session',
    paragraphs: [
      'Erick Danurahardja received an invitation to serve as a judge at the 17th Korea Dream Cup tournament. Several other full-contact karate organizations, such as Byakuren, Kyokushin, Yushikaikan, and Shinkyokushin, also sent their best athletes. Other participating countries included Japan and Nepal. This event inspired Erick to create a Dream Cup in Indonesia.',
      'The night before the competition, Erick had the opportunity to have dinner with Kazuyuki Hasegawa and received an offer to train together in April 2023 at Sosai Oyama\'s honbu in Ikebukuro, the birthplace of Kyokushin and its uchi deshi fighters. Hasegawa also instructed Erick to prepare for 40 rounds of kumite, with the promise of a rank promotion if he passed.',
      'Before returning home, Erick took the opportunity to visit Shihan Howon Jung\'s dojo in Seoul and discussed karate at length. Before saying goodbye, Erick received a dogi set from Shihan Jung as a keepsake.',
    ],
  },
  {
    date: 'December 2022',
    title: 'Kyokushin Grand Prix 5 match at Royal Plaza Surabaya, and Matthew Jeremy\'s victory at the Lindu Aji XVII Competition in Semarang',
    paragraphs: [
      'Competed in Kyokushin Grand Prix 5 held at Royal Plaza Surabaya. Bagus Gede Krishna placed 2nd after once again facing Marfin Alfonso in the final, with Alfonso retaining his previous win.',
      'Santoso once again took 1st place with a final win over fellow dojo member Daniel Tjakra. Jemima Rumiza Diovani won the adult women\'s one-match category, while the girls\' category was won by Hadijah in 1st place. Sultan Zaki took 1st place in the youth class.',
      'After registering 2 names for selection to compete at Lindu Aji XVII in Semarang, Matthew Jeremy was chosen to compete and won his match by TKO.',
    ],
  },
  {
    date: 'December 23, 2022',
    title: 'Erick Danurahardja: Facing an Organizational Coup at Zen Kyokushin Indonesia and Upholding the Spirit of Budo',
    paragraphs: [
      'What Erick had already predicted finally happened. Most of the instructors defected, splitting off and provoking other instructors to switch to a local Kyokushin organization without affiliation to Japan, under the pretext of not wanting to be led by Kazuyuki Hasegawa\'s strict rules. This coup had been planned for almost a year with the goal of having Erick removed from the organization.',
      'Firmly and swiftly, Erick immediately reported this to the honbu, and the Board of Directors agreed to freeze the names of the defectors who already held black belts and reported them to the Branch Chief Association. This meant the blacklisted names would never be accepted at any organization affiliated with that major Japanese association.',
      'At that time, only a handful of senior members and instructors still possessed the spirit of a true warrior, firmly and bravely refusing sweet offers made purely for image. They were Oktavian Eka Putra, Yafed Immanuel, Achmad Noer Hidayat, Abdul Halim, and Irwan Yulianto. From this, Erick learned that quantity must also be balanced with quality.',
    ],
  },
  {
    date: 'January 14-15, 2023',
    title: 'The first Gashuku held with a new spirit, a new chapter with loyal, disciplined, and warrior-spirited members',
    paragraphs: [
      'Held at UTC (Ubaya Training Center) Trawas, the event ran for 2 days to build camaraderie among members of the organization nationally. Erick shared the mission to be achieved in 2023: holding national and international-scale competitions, and urging all members to remain steadfast as true karateka.',
      'The organization\'s theme for 2023 was maintaining organizational unity, solidarity among dojos, and rebuilding everything from scratch with a fresh spirit.',
      'The second day closed with an examination supervised and evaluated by Erick Danurahardja and Sensei Achmad Noer Hidayat, with the following results:',
    ],
    list: [
      'William Adriano promoted to Dan I',
      'Dedy Setio promoted to Dan I',
      'Adrian Herdianto promoted to Kyu I',
    ],
  },
  {
    date: 'January 31, 2023',
    title: "Shidokan's 1-Year Milestone in Indonesia: Johan Samuel Nangin Joins, Bali Strengthens Synergy with Shidokan Indonesia",
    paragraphs: [
      'Exactly 1 year after Erick brought Shidokan into Indonesia, Johan Samuel Nangin from SoKyokushin declared his intent to join. Bali province gained further strength through synergy with Sensei Oktavian Putra.',
    ],
  },
  {
    date: 'March 18, 2023',
    title: 'Santoso Competes in One Pride MMA: Wins by 17-Second KO!!',
    paragraphs: ['Santoso competed in One Pride MMA and won by KO in just 17 seconds.'],
  },
  {
    date: 'March 19, 2023',
    title: "Competing in an Amateur MMA Championship: Jemima Diovani Wins 1st Place in the Women's Category and Earns a Full Trip & Accommodation to Malaysia",
    paragraphs: [
      'Sent Jemima Diovani and Benedict Willem Troy to an amateur MMA championship. Jemima won by submission and earned the best fighter title in the women\'s category, winning a ticket and full accommodation to Malaysia.',
    ],
  },
  {
    date: 'April 2023',
    title: 'Erick Danurahardja Travels to Japan for the International 40-Man Kumite Training, and Successfully Promotes to Black Belt Dan IV',
    paragraphs: [
      'Erick traveled to Japan alone with several specific agendas, one of which was answering Kazuyuki Hasegawa\'s challenge to prove his ability to complete 40 rounds of kumite and 16 advanced-level kata.',
      'At Sosai Oyama\'s honbu in Ikebukuro, Erick was thoroughly tested alongside many karateka from other countries, including Australia, Chile, Pakistan, India, Korea, Iran, Finland, Romania, Germany, and China.',
      '"You can count on one hand the Indonesians who have trained there — it\'s truly a joy and I never imagined I\'d be here now. This is truly a dream come true." — Erick Danurahardja, in a brief address to all the karateka from around the world present there.',
      'With the event concluding from morning until night in Ikebukuro, Erick proudly reached Dan IV rank, witnessed by all the karateka in attendance.',
    ],
  },
  {
    date: 'May 2023',
    title: "Erick Danurahardja's Visit to Honbu Shidokan: Learning from Sosui Yoshiji Soeno and Preparing for an International Seminar in Indonesia",
    paragraphs: [
      'After several weeks in Tokyo, Erick visited Ito, Shizuoka to visit Honbu Shidokan. The Sosui shared stories of his youth training under Sosai Oyama, and how he earned the nickname "Tiger of Kyokushin."',
      'The most important agenda of the Ito visit was discussing the organization\'s bylaws, covering Erick\'s rights and responsibilities as the sole Branch President for Indonesia, as well as mandatory rules from headquarters.',
      'This was followed by a casual discussion preparing for Yoshiji Soeno\'s visit to Indonesia in June 2023 for a seminar and international tournament.',
    ],
  },
  {
    date: 'June 24-25, 2023',
    title: "Closing of Honbu Shidokan's Visit to Indonesia: Evaluation, Recognition, and the Success of the Bali Open Tournament by Sosui Yoshiji Soeno",
    paragraphs: [
      'The Shidokan Bali Open Tournament & Seminar was held. Sensei Oktavian Eka Putra, assisted by Sensei Johan Nangin, hosted and organized this major event. Sosui Soeno and Honbucho Iuliana brought their 3 top fighters, Shingo Yokoyama, Kiichi Yamada, and Yusei Hirasawa, accompanied by Shihan Naotaka Tamura and Shihan Takashi Saito along with their wives.',
      'The seminar was held at Dhyana Pura University, attended by 50 participants from various organizations. The event closed with rank equivalency and recognition as International Shidokan Black Belt for:',
    ],
    list: [
      'Erick Danurahardja (Dan IV)',
      'Johan Samuel Nangin (Dan II)',
      'Darwin Kurniawan (Kyu I promoted to Dan I)',
      'Gabriel Constantine Nangin (Kyu I promoted to Dan I)',
    ],
  },
  {
    date: 'June 26, 2023',
    title: "House of Lion Dojo Indonesia, Sensei Johan Nangin's Dedication, Inaugurated Directly by Sosui Yoshiji Soeno in Sanur, Bali",
    paragraphs: [
      'House of Lion, a dedication by Sensei Johan Nangin to karate, was finally inaugurated directly by Sosui Yoshiji Soeno in Sanur, Bali, as part of WKA The Shidokan.',
    ],
  },
  {
    date: 'June 27, 2023',
    title: "Closing of Honbu Shidokan's Visit to Indonesia: Evaluation Results and Recognition from Sosui Yoshiji Soeno",
    paragraphs: [
      "The Honbu delegation's last day in Indonesia before returning to Japan. Several evaluation results and remarks from the Sosui:",
    ],
    list: [
      'Inviting Shidokan Indonesia to compete at the world championship in Japan every year',
      "Fully entrusting rank examinations up to a maximum of Dan III to Erick Danurahardja",
      'Adrian Herdianto promoted to Dan I based on his fighting ability and sportsmanship, approved by Honbucho Iuliana, Shihan Tamura, and Shihan Saito',
    ],
  },
  {
    date: 'July 21, 2023',
    title: 'Migration of Lion Dojo Sokyokushin to Shidokan: A New Beginning for Lion Dojo Surabaya',
    paragraphs: [
      "Starting from the Lion Dojo Sokyokushin instructor's wish to migrate to become Lion Dojo Shidokan, Erick Danurahardja welcomed the idea with open arms. However, due to incitement and slander from a resentful individual, the plan to join was unilaterally cancelled within 2 days.",
      'Several members disappointed by this sudden cancellation, including Peter Drago who still wanted to move his two children to Shidokan, encouraged Erick to open a new dojo in west Surabaya, led directly by him. The dojo kept the name Lion Dojo as a tribute to the pioneering work of Sensei Johan Nangin.',
      'A few weeks later, Sokyokushin Indonesia national champion Marfin Alfonso also withdrew and moved to Shidokan as an instructor, eventually being deemed fit to become the head coach of Lion Dojo with the title Shihandai (assistant head instructor).',
    ],
  },
  {
    date: 'August 2023',
    title: '2023 IKO Nakamura (IKON) Open National Championship',
    paragraphs: [
      'Competed in the 2023 IKON Open National Championship. Erick once again served as arbiter alongside host Sensei Jesse Chandra. In the youth class, Sultan Zaki and Pyscilya took 2nd place, Risma took 3rd place, Ahmad Bayu took 1st place in the children\'s class, while Queen won the one-match category.',
    ],
  },
  {
    date: 'September 2023',
    title: 'PORPROV Kickboxing Competition in Jombang: Jemima Rumiza Diovani Wins Gold Representing the City of Surabaya',
    paragraphs: [
      'Jemima Rumiza Diovani, representing the city of Surabaya, won the gold medal in the PORPROV kickboxing event in the city of Jombang.',
    ],
  },
  {
    date: 'November 4-5, 2023',
    title: 'Open Samurai Dream Cup Championship at Home Pro Pakuwon Mall Surabaya',
    paragraphs: [
      'The organization held an open championship called the Samurai Dream Cup, attended by 10 organizations with 160 participants. Darwin Kurniawan, as event committee chair, successfully made the event run smoothly and excitingly.',
      'Unlike typical national karate events, there was a Duathlon Match (full-contact karate round 1, kickboxing round 2) and an Epic Fight — an open-weight match between Gabriel Jericho Nangin (68kg, Shidokan) and Rico Alghazali (130kg, Kyokushin Bushido).',
    ],
  },
  {
    date: 'November 18, 2023',
    title: 'Special Training with Satoshi Yui, held with the Kyokushin Mental Development Association (PMK)',
    paragraphs: [
      'Received an invitation from the Kyokushin Mental Development Association to attend the Special Training with Satoshi Yui event. Shihan Satoshi Yui was once a model in kihon, ido geiko, and kata videos back at WKO Shinkyokushinkai, which formed the basis of Erick\'s learning while he was at WKOSI.',
    ],
  },
  {
    date: 'February 23-24, 2024',
    title: 'Gashuku II Indonesia Held, Followed by a Black Belt Examination at Villa Sahabat Trawas',
    paragraphs: [
      'Gashuku II was held at Villa Sahabat, Trawas. Erick explained that the theme for 2024 was "making history" — starting with Sensei Achmad Noer Hidayat and Shihandai Marfin Alfonso departing to Japan for examination and competing at the 2nd All Japan Tournament.',
      'The Gashuku closed on day 2 with a black belt examination attended by more participants than the previous year, including 3 people from the Luwuk, Central Sulawesi branch. Exam results:',
    ],
    list: [
      'Abdul Halim promoted to Dan II',
      'Laode Suwarno Nur promoted to Dan I',
      'Rahmat Syahroni S Larau promoted to Dan I',
      'Mohammad Agung Saleh promoted to Dan I',
      'Marfin Alfonso Teriubun promoted to Kyu 1',
      'Yehezkiel Dessy Wijaya promoted to Kyu 1',
    ],
  },
  {
    date: 'March 2024',
    title: 'Adnan Yusuf Mamonto from Bitung, North Sulawesi, Officially Joins Shidokan Indonesia Under the Name Dojo Ronin',
    paragraphs: [
      'Adnan Yusuf Mamonto from Bitung, North Sulawesi, joined the organization under the dojo name Ronin.',
    ],
  },
  {
    date: 'April 2024',
    title: 'Organization Sends 2 Members to Japan for the First Time to Compete and Take a Black Belt Examination',
    paragraphs: [
      "A proof of the organization's independence, sending Sensei Achmad Noer Hidayat and Shihandai Marfin Alfonso Teriubun to Japan — the first time either had set foot in the land of the Sakura. Sensei Achmad Noer took the examination, performing a series of advanced kata and 40 rounds of kumite, and was declared to have passed to International Dan IV.",
    ],
  },
  {
    date: 'May 3, 2024',
    title: 'Leadership Change in Central Sulawesi: Irwan Yulianto Steps Down, Laode Suwarno Nur Leads with New Dojo "Cheetah"',
    paragraphs: [
      'Irwan Yulianto resigned from the organization. Laode Suwarno Nur volunteered to take over and became the head of the Central Sulawesi Provincial Board, with a new dojo named Dojo Cheetah.',
    ],
  },
  {
    date: 'May 25-26, 2024',
    title: 'Organization Brings in Kancho Yoshii Okubo, Shihan Takashi Saito, and Shihan Naotaka Tamura as Guests of Honor at the Yogyakarta King\'s Cup Event',
    paragraphs: [
      'Kancho Yoshii Okubo, Shihan Takashi Saito, and Shihan Naotaka Tamura attended as guests of honor. The next day, the Kancho held a seminar at Prambanan Temple and taught his own created kata, Byakko ("white tiger"). Erick had the opportunity to learn Bo Kata directly from Kancho Okubo on the rooftop of the Royal Malioboro Hotel.',
    ],
  },
  {
    date: 'June 2, 2024',
    title: 'Erick and the Musashi Project: Seminar with Shihan Akira Masuda, Kyokushin Do Sparring, and Recognition of the Meaning of Bushido',
    paragraphs: [
      'Erick was specifically asked to be involved in the Musashi Project, a full-contact karate seminar and championship organizer founded by Randy Tumewa. At this inaugural event, the Musashi Project brought in Shihan Akira Masuda, a 1991 world championship finalist and one of the Kyokushin practitioners who successfully completed the 100-man kumite in the Mas Oyama era.',
      'At the end of the session, Shihan Masuda spontaneously selected Erick to spar using his own Kyokushin Do system. Before returning to Japan, Shihan Masuda said: "You showed very good fighting ability yesterday — I saw not just the fighting aspect, but also an understanding of the meaning of Bushido and its application in a fight."',
    ],
  },
  {
    date: 'June 30, 2024',
    title: 'Erick Serves as Referee at the IKIGAI Tournament in Jakarta and Visits the KEMENPORA Office',
    paragraphs: [
      'Erick received an invitation from IKO Nakamura Indonesia to serve as a referee at the IKIGAI tournament in Jakarta. The organization sent Benedict Willem Troy, Gabriel Constantine Nangin, and Mikael Jericho Nangin. The next day, Erick visited the KEMENPORA (Ministry of Youth and Sports) office to obtain a recommendation confirming the organization\'s legitimate identity.',
    ],
  },
  {
    date: 'September - October 2024',
    title: 'A Series of Major Events in Japan: Shido No Sato, Sosui Soeno\'s 77th Birthday, and The 44th Shidokan World Open Championship',
    paragraphs: [
      'Erick Danurahardja, Djohan Samuel Nangin, Dedy Setio, Jemima Rumiza Diovani, Gabriel Constantine Nangin, and Mikhael Jericho Nangin traveled to Japan for the following series of events:',
    ],
    sections: [
      {
        heading: 'Shido No Sato Completion Commemoration Party',
        bullets: [
          'A ceremonial event inaugurating a park next to the Honbu, containing monuments honoring Mas Oyama, Ikki Kajiwara, Ryuji Murakami, Yoshii Okubo, Kenichi Sato, Kouichiro Yamada, and Kiichi Yamada.',
          'Sosui Soeno led the reading of the dojo pledge and presented awards to several senior Shihan, attended by honored guests including Kancho Hidenori Ashihara and Noriaki Sato.',
        ],
      },
      {
        heading: 'Sosui Yoshiji Soeno 77th Birthday Party, Hotel Ravie Kawaryo',
        bullets: [
          "Nearly 200 guests attended to celebrate Sosui Soeno's birthday. Erick Danurahardja represented Shidokan Indonesia alongside Branch Presidents from France, the Caribbean, and Hong Kong.",
          'Erick had the opportunity to stand beside Kancho Hidenori Ashihara during the Kagami Biraki tradition, and presented a Sosui Soeno action figure along with tiger-themed boxing gloves as gifts.',
        ],
      },
      {
        heading: 'Training at Shido Hamamatsu Soeno',
        bullets: [
          "Trained together at Shihan Yamada's dojo in Hamamatsu — according to Erick, one of the finest dojos he has ever seen, complete with an oxygen room for athletes' needs.",
          'Erick was asked to sit seiza beside Shihan Yamada to open the training ceremony, followed by kihon, Shikon No Kata, and 20 rounds of alternating kumite.',
        ],
      },
      {
        heading: '2024 Club Quattro Tour — Kakuda Nobuaki Concert',
        bullets: [
          'Erick, Djohan, and Jemima watched a concert by K1 legend Kakuda Nobuaki in Osaka and had the opportunity to take photos together afterward.',
        ],
      },
      {
        heading: 'WKA The Shidokan International Seminar, Yokohama Budokan',
        bullets: [
          'Sosui Soeno personally led the kihon movements. Jemima was asked to perform in front of the seminar participants because her movements were judged to be excellent, Mikhael Jericho performed Kata Yanstu, and Gabriel Constantine performed Go Hon Geri alongside Kiichi Yamada and Yusei Hirasawa.',
          'Djohan Nangin was promoted to Dan III, while Shihan Tamura was promoted to Dan VI.',
        ],
      },
      {
        heading: 'The 44th Shidokan World Open Championship',
        bullets: [
          'Attended by more than 200 competitors from various countries. Jemima Diovani won 1st place — the first time an Indonesian female adult-category athlete has placed at the international level.',
          "In the kata category, Mikhael Jericho took 1st place with Kata Byakko, and Gabriel Constantine took 2nd place with Shikon No Kata.",
        ],
      },
    ],
  },
  {
    date: 'November 10, 2024',
    title: 'WBC Muay Thai Indonesia "Rise of The Local Hero"',
    paragraphs: [
      'The organization made its first debut in the Muay Thai category with Jemima Diovani and Sultan Zaki. Although neither won a medal, Erick, as head instructor, remained proud and reminded everyone that losing or winning is a perfectly natural part of the sport.',
    ],
  },
  {
    date: 'November 23, 2024',
    title: 'Darwin Kurniawan Resigns from the Organization',
    paragraphs: ['Darwin Kurniawan resigned from the organization.'],
  },
  {
    date: 'November 30, 2024',
    title: 'Fighter Audition by One Pride Championship: Jemima Diovani Passes in Category B',
    paragraphs: [
      'Jemima Diovani took part in the "Fighter Audition" held by One Pride Championship and was declared to have passed in Category B.',
    ],
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
