import React from "react";
import Layout from "./Layout";
import NewsContainer from "../NewsContainer";

const FeedDeck = (props) => {
  return (
    <Layout type="feed-deck">
      {Array(props.numberOfFeeds)
        .fill("")
        .map((_) => (
          <NewsContainer />
        ))}
    </Layout>
  );
};

export default FeedDeck;
