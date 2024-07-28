import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Footer = () => {
  return (
    <footer className="w-full max-w-screen-sm md:max-w-screen-md mx-auto px-4 mb-4 text-lg flex justify-between items-center">
      <p>
        <span className="font-bold">Contact:</span> sahelm.iqbal@niser.ac.in
      </p>
      <div>
        <a href="https://github.com/Sahel13" target="_blank" rel="noreferrer">
        <StaticImage
          src="../images/GitHub_Logo.png"
          alt="GitHub logo"
          placeholder="blurred"
          layout="fixed"
          width={50}
        />
        </a>
      </div>
    </footer>
  )
}

export default Footer
