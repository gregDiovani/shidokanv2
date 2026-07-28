export interface Quote {
  text: string
  author: string
}

// Placeholder pool — will be replaced by a backend fetch once the quotes API is ready.
export const QUOTES: Quote[] = [
  {
    text: 'Di era modern, kekuatan sejati bukan hanya tentang kemampuan bertarung, tetapi tentang kedisiplinan, hormat kepada sesama, serta tekad untuk terus berkembang menjadi pribadi yang lebih baik setiap hari.',
    author: 'Shihan Erick Danurahardja',
  },
]

export function getRandomQuote(): Quote {
  return QUOTES[Math.floor(Math.random() * QUOTES.length)]
}
