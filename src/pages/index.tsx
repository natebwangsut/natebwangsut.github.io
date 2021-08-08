import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from "../components/layout/Layout";

import SEO from "../components/seo/SEO";
import Landing from "../components/section/landing/Landing";
import About from "../components/section/about/About";
import Experience from "../components/section/experience/Experience";
import Project from "src/components/section/project/Project";

import { DefaultSectionProps, ExperienceProps, LandingProps, ProjectProps } from "../interface/props/section";

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
        fields: [frontmatter___start_date, frontmatter___end_date],
        order: DESC
      }
    ) {
      edges {
        node {
          frontmatter {
            title
            role
            company
            start_date(formatString: "MMMM YYYY")
            end_date(formatString: "MMMM YYYY")
          }
          html
        }
      }
    }
    project: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/contents/projects/" } },
      sort: { fields: [frontmatter___date, frontmatter___title], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            title
            date
            website
            github
            stack
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
    project: { edges: [{ node: ProjectProps }] }
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
      <Project {...data.project}/>
    </Layout>
  );
};

export default IndexPage;
