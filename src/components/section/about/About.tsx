import React from "react"

interface AboutProps {
  frontmatter: {
    preTitle: any
    title: any
    caption: any
    subCaption: any
  }
  html: any
}

const About: React.FC<AboutProps> = ({ frontmatter, html }) => {
  return(<>About</>)
}

export default About
