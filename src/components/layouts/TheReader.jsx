import React from "react";
import Layout from "./Layout";
import NewsContainer from "../NewsContainer";
import ImageGridContainer from "../ImageGridContainer";
import FeedContainer from "../FeedContainer";

const TheReader = () => {
  return (
    <Layout type="the-reader">
      <FeedContainer />
      <NewsContainer />
      <ImageGridContainer />
    </Layout>
  );
};

export default TheReader;
