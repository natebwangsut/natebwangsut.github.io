import React from "react"
import { graphql, PageProps, Link } from "gatsby"

import Layout from "../components/layout/Layout"
// import Image from "../components/image/Image"
import SEO from "../components/seo/SEO"
// import Section from "../components/section/Section"
import Me from "../components/section/me/Me"
// import About from "../components/section/about/About"

export const pageQuery = graphql`
  {
    me: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/me/" } }) {
      edges {
        node {
          frontmatter {
            preTitle
            title
            caption
            subCaption
            iam {
              item
              color
            }
          }
          html
        }
      }
    }
  }
`

interface IndexPageProps extends PageProps {
  data: {
    me: {
      edges: [
        {
          node: {
            frontmatter: {
              preTitle: any
              title: any
              caption: any
              subCaption: any
              iam: [{ item: string; color: string }]
            }
            html: any
          }
        }
      ]
    }
  }
}

const IndexPage: React.FC<IndexPageProps> = ({ location, data }) => {

  // Debug
  // console.log(data)
  // console.log(location)

  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1 style={{ color: "white" }}>Hi people</h1>
      <p style={{ color: "white" }}>Welcome to your new Gatsby site.</p>
      <p style={{ color: "white" }}>Now go build something great.</p> */}
      <Me {...data.me.edges[0].node} />
      {/* <About></About> */}
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  )
}

export default IndexPage
