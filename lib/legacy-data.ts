import type { GalleryImage } from './soeno-data'

function entry(slug: string, folder: string, name: string, desc?: string): GalleryImage {
  const caption = desc ? `${name} — ${desc}` : name
  return {
    src: `/images/${folder}/${slug}.webp`,
    caption,
    captionEn: caption,
  }
}

export const prideOfShidoGallery: GalleryImage[] = [
  entry('rafly-shakur', 'prideofshido', 'Rafly Shakur', 'Former National Champion WBC Muay Thai'),
  entry('vincent-majid', 'prideofshido', 'Vincent Majid', '14 Martial Arts Champion'),
]

export const nationalEliteGallery: GalleryImage[] = [
  entry('adrian-herdianto', 'nationalathlete', 'Adrian Herdianto', 'National Kyokushin Champion'),
  entry('jemima-diovani', 'nationalathlete', 'Jemima Diovani', '1st Place The 44th Shidokan Open International Championship'),
  entry('marfin-alfonso', 'nationalathlete', 'Marfin Alfonso', 'Competitor of The 2nd Open Tournament All Japan Kyokushin Championship'),
]

export const hallOfLegendsGallery: GalleryImage[] = [
  entry('daihyo-kenji-midori', 'prideoflegend', 'Daihyo Kenji Midori', 'WKO Shinkyokushinkai'),
  entry('daihyo-masanaga-nakamura', 'prideoflegend', 'Daihyo Masanaga Nakamura', 'IKON'),
  entry('jukucho-kenichi-osada', 'prideoflegend', 'Jukucho Kenichi Osada', 'Kudo'),
  entry('jukucho-ryuji-murakami', 'prideoflegend', 'Jukucho Ryuji Murakami', 'Shikon Murakami Juku'),
  entry('kancho-yoshii-okubo', 'prideoflegend', 'Kancho Yoshii Okubo', 'Nidaime Shidokan Kancho'),
  entry('sensei-ewerton-teixeira', 'prideoflegend', 'Sensei Ewerton Teixeira'),
  entry('sensei-fujii-yusuke', 'prideoflegend', 'Sensei Fujii Yusuke', 'Kyokushin Kenbukai Champion'),
  entry('sensei-jan-soukup-and-sensei-zahari-damyanov', 'prideoflegend', 'Sensei Jan Soukup & Sensei Zahari Damyanov'),
  entry('sensei-makoto-akaishi', 'prideoflegend', 'Sensei Makoto Akaishi'),
  entry('sensei-takayuki-tsukakoshi', 'prideoflegend', 'Sensei Takayuki Tsukakoshi', 'The 9th WKOT Shinkyokushinkai Champion'),
  entry('sensei-tariel-nikoleishvili', 'prideoflegend', 'Sensei Tariel Nikoleishvili'),
  entry('shihan-fransisco-filho', 'prideoflegend', 'Shihan Fransisco Filho'),
  entry('shihan-glaube-feitosa', 'prideoflegend', 'Shihan Glaube Feitosa'),
  entry('shihan-judd-reid', 'prideoflegend', 'Shihan Judd Reid', 'Chikara'),
  entry('shihan-kakuda-nobuaki', 'prideoflegend', 'Shihan Kakuda Nobuaki', 'Seidokaikan'),
  entry('shihan-kenji-sori', 'prideoflegend', 'Shihan Kenji Sori'),
  entry('shihan-lechi-kurbanov', 'prideoflegend', 'Shihan Lechi Kurbanov'),
  entry('shihan-ryu-narushima', 'prideoflegend', 'Shihan Ryu Narushima'),
  entry('shihan-satoshi-yui', 'prideoflegend', 'Shihan Satoshi Yui', "Mas Oyama's Uchi Deshi"),
  entry('shihan-shigeru-tabata', 'prideoflegend', 'Shihan Shigeru Tabata', 'Kyokushin Union'),
  entry('shihan-tatsuya-naka', 'prideoflegend', 'Shihan Tatsuya Naka', 'JKA & Actor in Kuro Obi Movie'),
  entry('soshi-katsuaki-sato', 'prideoflegend', 'Soshi Katsuaki Sato', '1st place 1975 The First All-World Full Contact Karate Championships'),
  entry('shihan-david-pickthall', 'prideoflegend', 'Shihan David Pickthall', 'President of IFK Kyokushin'),
  entry('soshi-kazuyuki-hasegawa', 'prideoflegend', 'Soshi Kazuyuki Hasegawa', 'Zen Kyokushin'),
]
