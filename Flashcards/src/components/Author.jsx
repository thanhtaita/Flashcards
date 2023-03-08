import React from "react";
const Author = (prop) => {
  return (
    <div className="author-container">
      <img className="author-pic" src={prop.pic} alt="" />
      <p className="author">{prop.author}</p>
    </div>
  );
};

export default Author;
