import React from "react";

import Layout from "../components/layout/Layout";
import SEO from "../components/seo/SEO";

const BlogPage: React.FC = () => (
  <Layout>
    <SEO title="Blog" />
    <div style={{ marginTop: 100 }}></div>
    <h1>Random Blog</h1>
    <p>Blogs item here</p>
  </Layout>
);

export default BlogPage;
