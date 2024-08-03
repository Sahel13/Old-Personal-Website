import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4 my-4 flex justify-end items-center">
      <a href="https://github.com/Sahel13" target="_blank" rel="noreferrer">
      <StaticImage
        src="../images/logos/GitHub.svg"
        alt="GitHub logo"
        placeholder="blurred"
        layout="fixed"
        width={25}
      />
      </a>
      <a href="https://scholar.google.com/citations?user=KP7mJUgAAAAJ&hl=en" target="_blank" rel="noreferrer" className="pl-4">
      <StaticImage
        src="../images/logos/Google Scholar.svg"
        alt="Google Scholar logo"
        placeholder="blurred"
        layout="fixed"
        width={25}
      />
      </a>
      <a href="https://twitter.com/sahel_iqbal" target="_blank" rel="noreferrer" className="pl-4">
      <StaticImage
        src="../images/logos/X.png"
        alt="X logo"
        placeholder="blurred"
        layout="fixed"
        width={23}
      />
      </a>
      <a href="https://www.linkedin.com/in/sahel-mohammad-iqbal/" target="_blank" rel="noreferrer" className="pl-4">
      <StaticImage
        src="../images/logos/LinkedIn.png"
        alt="LinkedIn logo"
        placeholder="blurred"
        layout="fixed"
        width={25}
      />
      </a>
    </footer>
  )
}

export default Footer
