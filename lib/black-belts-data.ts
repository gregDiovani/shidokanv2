export type BeltStatus = 'Aktif' | 'Tidak Aktif'

export interface BlackBelter {
  name: string
  number: string
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
      { name: 'Athik Roji Pamuji', number: '-', status: 'Aktif' },
      { name: 'Dylan Wijaya', number: '-', status: 'Aktif' },
      { name: 'Marfin Alfonso Teriubun', number: '-', status: 'Aktif' },
      { name: 'Risma Aulia Putri', number: '-', status: 'Aktif' },
      { name: 'Pyscilya Fitrah Ananda Panji', number: '-', status: 'Aktif' },
      { name: 'Yehezkiel Dessy Wijaya', number: '-', status: 'Aktif' },
    ],
  },
  {
    dan: 'Sandan',
    label: '3rd Dan Black Belt',
    stripes: 3,
    members: [
      { name: 'Jaya Sidhi Sugiwan', number: '3-76', status: 'Aktif' },
    ],
  },
]
