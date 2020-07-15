import React from "react"
import styled from "styled-components"

interface AboutProps {
  frontmatter: any
  html: any
}

const StyledContainer = styled.section`
  position: relative;

  margin-top: 10rem;
  margin-bottom: 10rem;
`

const About: React.FC<AboutProps> = ({ frontmatter, html }) => (
  <StyledContainer>Mangooo</StyledContainer>
)

export default About
