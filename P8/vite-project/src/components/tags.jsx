import React from "react";

function Tags({ tags }) {
  return (
    <div className="house__tags--container">
      {tags.map((tag) => (
        <span className="house__tags">{tag}</span>
      ))}
    </div>
  );
}

export default Tags;
