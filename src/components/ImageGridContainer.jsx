import React from "react";
import "./ImageGridContainer.css";

const ImageGridContainer = () => {
  return (
    <div className="image-grid-container">
      {Array(128)
        .fill("")
        .map((_) => (
          <img src="https://via.placeholder.com/420x320" className="imageNew" />
        ))}
    </div>
  );
};

export default ImageGridContainer;
