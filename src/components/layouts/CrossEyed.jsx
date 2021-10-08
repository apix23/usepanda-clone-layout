import React from "react";
import Layout from "./Layout";
import ImageGridContainer from "../ImageGridContainer";

const CrossEyed = () => {
  return (
    <Layout type="cross-eyed">
      <ImageGridContainer />
      <ImageGridContainer />
    </Layout>
  );
};

export default CrossEyed;
