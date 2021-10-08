import React from "react";
import Layout from "./Layout";
import NewsContainer from "../NewsContainer";
import ImageGridContainer from "../ImageGridContainer";

const LeftHanded = () => {
  return (
    <Layout type="left-handed">
      <ImageGridContainer />
      <NewsContainer />
    </Layout>
  );
};

export default LeftHanded;
