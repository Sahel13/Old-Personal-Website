export interface PaperProps {
  title: string
  authors: string
  year: string
  arxiv: string
  venue?: string
  link?: string
  code?: string
}

export const preprints: PaperProps[] = [
  {
    title: "Risk-Sensitive Stochastic Optimal Control as Rao-Blackwellized Markovian Score Climbing",
    authors: "Hany Abdulsamad, Sahel Iqbal, Adrien Corenflos, Simo Särkkä",
    year: "2023",
    arxiv: "https://arxiv.org/abs/2312.14000",
    code: "https://github.com/hanyas/psoc",
  },
]
