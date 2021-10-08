import React from "react";
import TextNews from "./TextNews";
import "./NewsContainer.css";

const NewsContainer = () => {
  return (
    <div className="news-container">
      {Array(9)
        .fill("")
        .map((_) => (
          <TextNews />
        ))}
    </div>
  );
};

export default NewsContainer;
