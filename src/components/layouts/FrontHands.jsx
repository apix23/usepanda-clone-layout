import React from "react";
import Layout from "./Layout";
import NewsContainer from "../NewsContainer";
import ImageGridContainer from "../ImageGridContainer";

const FrontHands = () => {
  return (
    <Layout type="front-hands">
      <NewsContainer />
      <ImageGridContainer />
      <NewsContainer />
    </Layout>
  );
};

export default FrontHands;
