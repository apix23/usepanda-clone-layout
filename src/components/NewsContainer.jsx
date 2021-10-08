import React, { useState } from "react";
import TextNews from "./TextNews";
import "./NewsContainer.css";

const NewsContainer = () => {
  const [type, setType] = useState("news");
  console.log("Type is: ", type);
  return (
    <div className="news-container">
      <div className="type-selector">
        <select value={type} onChange={(e) => setType(e.target.value)}>
          <option value="news">News Feed</option>
          <option value="images">Images Feed</option>
        </select>
      </div>
      {type === "news"
        ? Array(29)
            .fill("")
            .map((_) => <TextNews />)
        : Array(29)
            .fill("")
            .map((_) => (
              <img
                src="https://via.placeholder.com/420x320"
                className="imageNew"
              />
            ))}
    </div>
  );
};

export default NewsContainer;
