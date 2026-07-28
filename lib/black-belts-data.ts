export type BeltStatus = 'Aktif' | 'Dicabut' | 'Mengundurkan Diri' | 'Meninggal Dunia' | 'Dipecat'

export interface BlackBelter {
  name: string
  branch: string
  number: string
  dateIssued: string
  status: BeltStatus
}

export interface DanRank {
  dan: string
  label: string
  stripes: number
  members: BlackBelter[]
}

export const blackBeltRanks: DanRank[] = [
  {
    dan: 'Shodan',
    label: '1st Dan Black Belt',
    stripes: 1,
    members: [
      { name: 'Tiovano Tikori Maihesa', branch: 'Flores', number: 'INA-001-0002', dateIssued: '12 December 2020', status: 'Aktif' },
      { name: 'I Putu Ray Lewi Andrean', branch: 'Bali', number: 'INA-001-0003', dateIssued: '12 December 2024', status: 'Aktif' },
      { name: 'Soedhihono Soedjianto', branch: 'Semarang', number: 'INA-001-0004', dateIssued: '5 September 2021', status: 'Meninggal Dunia' },
      { name: 'Athik Roji Pamuji', branch: 'Semarang', number: 'INA-001-0005', dateIssued: '5 September 2021', status: 'Dicabut' },
      { name: 'Budiyanto', branch: 'Semarang', number: 'INA-002-0005', dateIssued: '5 May 2021', status: 'Dicabut' },
      { name: 'Danu Supramono', branch: 'Semarang', number: 'INA-002-0006', dateIssued: '5 May 2021', status: 'Dicabut' },
      { name: 'Raphael Jenar Wibisono', branch: 'Semarang', number: 'INA-002-0007', dateIssued: '5 May 2021', status: 'Dicabut' },
      { name: 'Iwan Weda', branch: 'Surabaya', number: 'INA-001-0006', dateIssued: '7 February 2022', status: 'Dicabut' },
      { name: 'Delvia Disnia Dela', branch: 'Surabaya', number: 'INA-001-0007', dateIssued: '7 February 2022', status: 'Dicabut' },
      { name: 'Widiyanto Tri Handoko', branch: 'Semarang', number: 'INA-001-0008', dateIssued: '7 February 2022', status: 'Dicabut' },
      { name: 'Supriyanto', branch: 'Semarang', number: 'INA-001-0009', dateIssued: '7 February 2022', status: 'Dicabut' },
      { name: 'Gembong Satria Negara', branch: 'Semarang', number: 'INA-002-0008', dateIssued: '7 July 2022', status: 'Dicabut' },
      { name: 'Erwin Haritjahyo', branch: 'Surabaya', number: 'INA-002-0009', dateIssued: '7 July 2022', status: 'Dicabut' },
      { name: 'Melkianus Raharjo Jemahun', branch: 'Bali', number: 'INA-001-0013', dateIssued: '26 June 2022', status: 'Aktif' },
      { name: 'Steven Stevanus', branch: 'Semarang', number: 'INA-001-0014', dateIssued: '26 June 2022', status: 'Dicabut' },
      { name: 'Amir', branch: 'Semarang', number: 'INA-001-0015', dateIssued: '26 June 2022', status: 'Dicabut' },
      { name: 'Dedy Setio', branch: 'Surabaya', number: 'INA-001-0016', dateIssued: '15 January 2023', status: 'Aktif' },
      { name: 'William Adriano', branch: 'Bandung', number: 'INA-003-0001', dateIssued: '15 January 2023', status: 'Aktif' },
      { name: 'Darwin Kurniawan', branch: 'Surabaya', number: '1-102', dateIssued: '24 June 2023', status: 'Mengundurkan Diri' },
      { name: 'Gabriel Constantine Nangin', branch: 'Bali', number: '1-101', dateIssued: '24 June 2023', status: 'Aktif' },
      { name: 'Rahmat Syahroni S Larau', branch: 'Luwuk', number: 'INA-001-0018', dateIssued: '25 February 2024', status: 'Aktif' },
      { name: 'Mohammad Agung Saleh', branch: 'Luwuk', number: 'INA-001-0019', dateIssued: '25 February 2024', status: 'Aktif' },
      { name: 'Laode Suwarno Nur', branch: 'Luwuk', number: '1-190', dateIssued: '24 May 2024', status: 'Aktif' },
      { name: 'Adnan Yusuf Mamonto', branch: 'Bitung', number: '1-214', dateIssued: '29 September 2024', status: 'Aktif' },
      { name: 'Dylan Wijaya', branch: 'Surabaya', number: '1-245', dateIssued: '15 January 2025', status: 'Aktif' },
      { name: 'Yehezkiel Dessy Wijaya', branch: 'Surabaya', number: '1-246', dateIssued: '15 January 2025', status: 'Mengundurkan Diri' },
      { name: 'Marfin Alfonso Teriubun', branch: 'Surabaya', number: '1-247', dateIssued: '15 January 2025', status: 'Aktif' },
      { name: 'Jemima Rumiza Diovani', branch: 'Surabaya', number: '1-248', dateIssued: '15 January 2025', status: 'Aktif' },
      { name: 'Fajar Kurnia Agung', branch: 'Surabaya', number: 'INA-001-020', dateIssued: '26 January 2025', status: 'Aktif' },
      { name: 'Risma Aulia Putri', branch: 'Surabaya', number: 'INA-004-002', dateIssued: '26 January 2025', status: 'Aktif' },
      { name: 'Sultan Zaki Farezy', branch: 'Surabaya', number: 'INA-004-003', dateIssued: '26 January 2025', status: 'Dipecat' },
      { name: 'Pyscilya Fitrah Ananda Panji', branch: 'Surabaya', number: 'INA-004-004', dateIssued: '26 January 2025', status: 'Aktif' },
    ],
  },
  {
    dan: 'Nidan',
    label: '2nd Dan Black Belt',
    stripes: 2,
    members: [
      { name: 'Oktavian Eka Putra', branch: 'Bali', number: 'INA-001-020', dateIssued: '26 June 2023', status: 'Aktif' },
      { name: 'Johan Samuel Nangin', branch: 'Bali', number: '2-36', dateIssued: '24 June 2023', status: 'Aktif' },
      { name: 'Abdul Halim', branch: 'Surabaya', number: 'INA-001-0', dateIssued: '25 February 2024', status: 'Aktif' },
    ],
  },
  {
    dan: 'Sandan',
    label: '3rd Dan Black Belt',
    stripes: 3,
    members: [
      { name: 'Erick Danurahardja', branch: 'Surabaya', number: 'INA-001-001', dateIssued: '-', status: 'Aktif' },
      { name: 'Bambang Soeng', branch: 'Surabaya', number: 'INA-002-002', dateIssued: '-', status: 'Dicabut' },
      { name: 'Made Senjaya', branch: 'Bali', number: 'INA-002-002', dateIssued: '-', status: 'Dicabut' },
      { name: 'Wijaya The', branch: 'Bali', number: 'INA-002-003', dateIssued: '-', status: 'Dicabut' },
      { name: 'Suryadi Wanda', branch: 'Bali', number: 'INA-002-004', dateIssued: '-', status: 'Dicabut' },
      { name: 'Ivan Andinata', branch: 'Semarang', number: 'INA-001-011', dateIssued: '26 June 2022', status: 'Dicabut' },
      { name: 'Abdul Aziz', branch: 'Lombok', number: 'INA-001-010', dateIssued: '26 June 2022', status: 'Dicabut' },
      { name: 'Johan Samuel Nangin', branch: 'Bali', number: '-', dateIssued: '-', status: 'Aktif' },
      { name: 'Jaya Sidhi Sugiwan', branch: 'Banjarmasin', number: '3-76', dateIssued: '-', status: 'Aktif' },
    ],
  },
  {
    dan: 'Yondan',
    label: '4th Dan Black Belt',
    stripes: 4,
    members: [
      { name: 'Erick Danurahardja', branch: 'Surabaya', number: '4-40', dateIssued: '24 June 2023', status: 'Aktif' },
      { name: 'Achmad Noer Hidayat', branch: 'Surabaya', number: 'INA-001-0', dateIssued: '22 April 2024', status: 'Aktif' },
    ],
  },
]
