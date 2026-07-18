export interface Dojo {
  instructor: string
  name: string
  region: string
  address: string
  schedule: string
  phone: string
  instagram?: string
  skills?: string[]
}

function formatPhoneID(raw: string): string {
  const digits = raw.startsWith('0') ? raw : `0${raw}`
  return digits.replace(/(\d{4})(\d{4})(\d+)/, '$1-$2-$3')
}

// Data sementara — nanti diganti fetch ke API asli lewat getDojoList().
const mockDojoList: Dojo[] = [
  {
    instructor: 'Marfin Alfonso',
    name: 'Lion Dojo Surabaya',
    region: 'Surabaya',
    address: 'Tamo Venue Rooftop, Citraland Surabaya, Jl. Royal Park TL1/7-8, Lidah Kulon, Kec. Lakarsantri, Surabaya, Jawa Timur 60213',
    schedule: 'Jumat, 18.00–20.00 WIB',
    instagram: 'shidokan.id / liondojo.sbybarat',
    phone: formatPhoneID('81331777708'),
  },
  {
    instructor: 'Abdul Halim',
    name: 'Dojo Ampel',
    region: 'Surabaya',
    address: 'Ampel Masjid No. 53, Surabaya',
    schedule: 'Jumat & Minggu, 19.15 WIB',
    instagram: 'zenkyokushin.ampel',
    phone: formatPhoneID('818399306'),
  },
  {
    instructor: 'Achmad Noer',
    name: 'Dojo Al Khairiyah',
    region: 'Surabaya',
    address: 'Jl. Sultan Iskandar Muda No. 36, Ujung, Kec. Semampir, Surabaya, Jawa Timur 60155',
    schedule: 'Senin & Rabu, 19.30 WIB',
    instagram: 'zenkyokushin_alkhairiyah',
    phone: formatPhoneID('8123347264'),
  },
  {
    instructor: 'I Putu Ray Lewi Andrean',
    name: 'Vortex Dojo Singaraja',
    region: 'Bali',
    address: 'Vortex Dojo, Universitas Dhyana Pura, Dalung, Kab. Badung, Bali',
    schedule: 'Sabtu, 16.00 WIB',
    instagram: 'kyokushin.bali',
    phone: formatPhoneID('81228769990'),
  },
  {
    instructor: 'Melkianus Raharjo Jemahun',
    name: 'Vortex Dojo Singaraja',
    region: 'Bali',
    address: 'Vortex Dojo, Universitas Dhyana Pura, Dalung, Kab. Badung, Bali',
    schedule: 'Sabtu, 16.00 WIB',
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
  {
    instructor: 'William Adriano',
    name: 'YamaGawa Dojo',
    region: 'Jawa Barat',
    address: 'NuArt Sanctuary, Jl. Setra Duta Raya No. L6, Ciwaruga, Kec. Parongpong, Kab. Bandung Barat, Jawa Barat 40151',
    schedule: 'By Appointment',
    phone: formatPhoneID('81286888666'),
    skills: [
      'Muay Thai — Trainer B, Muay Sukhothai',
      'Eskrima FMA — Guro, Mahardikka Eskrima Martial Arts Academy',
      'Japanese Swordsmanship — Certified Instructor, International Shinkendo Federation',
      'Korean Swordsmanship — Certified Instructor, World Kummoyeh Federation',
      'Taekwondo — 4th Dan, World Taekwondo HQ Kukkiwon',
      'Aikido — Shodan, Aikikai Foundation',
    ],
  },
]

export async function getDojoList(): Promise<Dojo[]> {
  // TODO: ganti dengan fetch API asli, contoh:
  // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/dojos`, { next: { revalidate: 3600 } })
  // return res.json()
  return mockDojoList
}
