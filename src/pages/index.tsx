import React from "react";
import { Router } from "@reach/router";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";
import Landing from "../components/section/landing/Landing";
import About from "../components/section/about/About";
import Experience from "../components/section/experience/Experience";

import { DefaultSectionProps, ExperienceProps, LandingProps } from "../interface/props/section";

export const pageQuery = graphql`
  {
    landing: allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/contents/landing/" } }) {
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
    experience: allMarkdownRemark(
        filter: { fileAbsolutePath: { regex: "/contents/experience/" } },
        sort: {
          fields: [frontmatter___start_date, frontmatter___end_date]
          order: DESC
        }
      ) {
      edges {
        node {
          frontmatter {
            title
            role
            company
            start_date
            end_date
          }
          html
        }
      }
    }
  }
`;

interface IndexPageProps extends PageProps {
  data: {
    about: { edges: [{ node: DefaultSectionProps }] };
    landing: { edges: [{ node: LandingProps }] };
    experience: { edges: [{ node: ExperienceProps }] };
  };
}

const IndexPage: React.FC<IndexPageProps> = ({ location, data }) => {
  // console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <Landing {...data.landing.edges[0].node} />
      <About {...data.about.edges[0].node} />
      <Experience {...data.experience} />
    </Layout>
  );
};

export default IndexPage;
