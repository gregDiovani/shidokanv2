export interface Dojo {
  instructor?: string
  name: string
  region: string
  address: string
  schedule: string
  phone?: string
  instagram?: string
  skills?: string[]
}

function formatPhoneID(raw: string): string {
  const digits = raw.startsWith('0') ? raw : `0${raw}`
  return digits.replace(/(\d{4})(\d{4})(\d+)/, '$1-$2-$3')
}

// Data sementara — nanti diganti fetch ke API asli lewat getDojoList().
const mockDojoList: Dojo[] = [
  // Jakarta
  {
    instructor: 'Ristian',
    name: 'Tigershark Black Hawk Dojo',
    region: 'Jakarta Timur',
    address: 'Jl. Warga II No. 54, RT.3/RW.6, Cilangkap, Kec. Cipayung, Kota Jakarta Timur, DKI Jakarta 13870',
    schedule: 'Jumat, 20.00 WIB',
  },
  {
    instructor: 'Ristian',
    name: 'Dojo Taman Bambu',
    region: 'Jakarta Timur',
    address: 'Jl. Rw. Binong, Jl. Pagelarang No. 4 Blok Jacky No. 60, RT.4/RW.3, Bambu Apus, Kec. Cipayung, Kota Jakarta Timur, DKI Jakarta 13890',
    schedule: 'Sabtu, 08.00 WIB',
  },

  // Jawa Barat
  {
    name: 'Dojo Ksatria Laras',
    region: 'Bogor',
    address: 'Perum Graha Laras, Jl. Raya Jakarta-Bogor No. KM 51, Kel. Cimandala, Kec. Sukaraja, Kab. Bogor, Jawa Barat 16710',
    schedule: 'Sabtu, 07.00 WIB',
    instagram: 'KsatriaLaras_dojo',
  },
  {
    name: 'Dojo SMKN 4 Depok',
    region: 'Depok',
    address: 'Jl. Kramat 3 No. 16, Kel. Sukatani, Kec. Tapos, Kota Depok, Jawa Barat 16454',
    schedule: 'Sabtu, 10.00 WIB',
  },

  // Jawa Timur
  {
    instructor: 'Kenny',
    name: "Ken's Dojo",
    region: 'Pasuruan',
    address: 'Jl. Salak 5 No. 4, Perumnas Bugul Permai, Kel. Bugul Kidul, Kec. Bugul Kidul, Kota Pasuruan, Jawa Timur',
    schedule: 'Senin, Rabu & Jumat, 15.00 WIB',
  },
  {
    name: 'Musashi Dojo',
    region: 'Surabaya',
    address: 'Jl. Medokan Asri 86, Surabaya, Jawa Timur',
    schedule: 'Senin & Jumat, 18.00 WIB',
    phone: formatPhoneID('085962770099'),
    instagram: 'musashidojo.id (IG & TikTok)',
  },
  {
    name: 'Samurai Creed Dojo',
    region: 'Malang',
    address: 'Terusan Batubara 12/16 (bagian belakang), RT.4/RW.1, Blimbing - Pandanwangi, Kota Malang, Jawa Timur',
    schedule: 'Jadwal menyusul',
    phone: formatPhoneID('087777035666'),
    instagram: 'samuraicreed_dojo',
  },
  {
    instructor: 'Marfin Alfonso',
    name: 'Lion Dojo SBY Barat',
    region: 'Surabaya',
    address: 'Prambanan Residence, Cluster Seilendra Blok AB-2, Lidah Kulon, Kec. Lakarsantri, Surabaya, Jawa Timur 60213',
    schedule: 'Jumat, 18.00–20.00 WIB',
    instagram: 'shidokan.id / liondojo.sbybarat',
    phone: formatPhoneID('81331777708'),
  },

  // Bali
  {
    name: 'Lion Dojo – House of Lion',
    region: 'Denpasar',
    address: 'Jl. Danau Tempe I, Komplek Jro Graha Blok C No. 9, Sanur Kauh, Denpasar Selatan, Bali 80228',
    schedule: 'Selasa & Jumat, 16.00–18.00 WIB',
    phone: formatPhoneID('82257000357'),
    instagram: 'liondojo.bali',
  },
  {
    instructor: 'I Putu Ray Lewi Andrean',
    name: 'Vortex Dojo',
    region: 'Badung',
    address: 'Kampus Universitas Dhyana Pura, Jl. Raya Padang Luwih, Dalung, Kab. Badung, Bali',
    schedule: 'Selasa, Kamis & Sabtu, 16.30 WIB',
    instagram: 'kyokushin.bali',
    phone: formatPhoneID('81228769990'),
  },
  {
    instructor: 'Melkianus Raharjo Jemahun',
    name: 'Vortex Dojo',
    region: 'Badung',
    address: 'Kampus Universitas Dhyana Pura, Jl. Raya Padang Luwih, Dalung, Kab. Badung, Bali',
    schedule: 'Selasa, Kamis & Sabtu, 16.30 WIB',
    instagram: 'kyokushin.bali',
    phone: formatPhoneID('81387932627'),
    skills: [
      'Combat Goju-ryu — Nidan',
      'Aiki Jujitsu — Shodan',
      'Karate-jutsu — Sandan',
      'Muay Thai & Kickboxing',
      'Collegiate Wrestling',
    ],
  },

  // Sulawesi Utara
  {
    instructor: 'Adnan Yusuf Mamonto',
    name: 'Dojo Ronin Bitung',
    region: 'Bitung',
    address: 'Madidir Weru Ling. 4, Kec. Madidir, Bitung, Sulawesi Utara',
    schedule: 'Jumat, 16.00 WITA',
    instagram: 'Shidokan_sulut',
  },
  {
    instructor: 'Adnan Yusuf Mamonto',
    name: 'Dojo Ronin Manado (DVO)',
    region: 'Manado',
    address: 'Jl. Ring Road, Manado, Sulawesi Utara',
    schedule: 'Sabtu, 10.00 WITA',
    instagram: 'Shidokan_sulut',
  },

  // Sulawesi Tengah
  {
    name: 'Dojo Cheetah',
    region: 'Luwuk',
    address: 'Jl. Jagaan Kampung 9, Kec. Luwuk Selatan, Kab. Banggai, Sulawesi Tengah',
    schedule: 'Senin–Sabtu malam, 19.30 WIB',
  },

  // Sumatera Utara
  {
    name: 'Ryu Dojo Martial Arts Centre',
    region: 'Medan',
    address: 'No. 227A, Ring Road Setia Budi, Pasar 1, Medan, Sumatera Utara',
    schedule: 'Selasa, 20.00 WIB',
    instagram: 'ryudojo.medan / FB: ryudojo.medan',
  },
]

export async function getDojoList(): Promise<Dojo[]> {
  // TODO: ganti dengan fetch API asli, contoh:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dojos`, { next: { revalidate: 3600 } })
  // return res.json()
  return mockDojoList
}
