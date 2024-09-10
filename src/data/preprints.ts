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
    title: "Recursive Nested Filtering for Efficient Amortized Bayesian Experimental Design",
    authors: "Sahel Iqbal, Hany Abdulsamad, Sara Pérez-Vieites, Simo Särkkä, Adrien Corenflos",
    year: "2024",
    arxiv: "https://arxiv.org/abs/2409.05354",
    code: "https://github.com/Sahel13/InsideOutNPF.jl",
  },
  {
    title: "Risk-Sensitive Stochastic Optimal Control as Rao-Blackwellized Markovian Score Climbing",
    authors: "Hany Abdulsamad, Sahel Iqbal, Adrien Corenflos, Simo Särkkä",
    year: "2023",
    arxiv: "https://arxiv.org/abs/2312.14000",
    code: "https://github.com/hanyas/psoc",
  },
]
