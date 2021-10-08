import React from "react";
import Layout from "./Layout";
import NewsContainer from "../NewsContainer";

const NewsFreak = () => {
  return (
    <Layout type="news-freak">
      <NewsContainer />
      <NewsContainer />
      <NewsContainer />
      <NewsContainer />
    </Layout>
  );
};

export default NewsFreak;
