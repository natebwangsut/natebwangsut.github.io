import React from "react";
import { graphql, PageProps, Link } from "gatsby";

import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";
import Me from "../components/section/me/Me";
import About from "../components/section/about/About";
import Experience from "../components/section/experience/Experience";

export const pageQuery = graphql`
  {
    me: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contents/me/" } }) {
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
    about: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contents/about/" } }) {
      edges {
        node {
          frontmatter {
            preTitle
            title
            caption
            subCaption
          }
          html
        }
      }
    }
    experience: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contents/experience/" } }) {
      edges {
        node {
          frontmatter {
            title
            role
            company
            timeframe
          }
          html
        }
      }
    }
  }
`;

interface IndexPageProps extends PageProps {
  data: {
    me: {
      edges: [
        {
          node: {
            frontmatter: {
              preTitle: any;
              title: any;
              caption: any;
              subCaption: any;
              iam: [{ item: string; color: string }];
            };
            html: any;
          };
        }
      ];
    };
    about: {
      edges: [
        {
          node: {
            frontmatter: {
              preTitle: any;
              title: any;
              caption: any;
              subCaption: any;
            };
            html: any;
          };
        }
      ];
    };
    experience: {
      edges: [
        {
          node: {
            frontmatter: {
              title: any;
              role: any;
              company: any;
              timeframe: any;
            };
            html: any;
          };
        }
      ];
    };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ location, data }) => {
  console.log(data.experience.edges);

  return (
    <Layout>
      <SEO title="Home" />
      {/* <h1 style={{ color: "white" }}>Hi people</h1>
      <p style={{ color: "white" }}>Welcome to your new Gatsby site.</p>
      <p style={{ color: "white" }}>Now go build something great.</p> */}
      <Me {...data.me.edges[0].node} />
      <About {...data.about.edges[0].node} />
      <Experience {...data.experience} />
      {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div> */}
      {/* <Link to="/page-2/">Go to page 2</Link> <br /> */}
      {/* <Link to="/using-typescript/">Go to "Using TypeScript"</Link> */}
    </Layout>
  );
};

export default IndexPage;
