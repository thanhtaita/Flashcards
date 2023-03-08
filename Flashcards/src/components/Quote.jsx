import React from "react";
const Quote = (prop) => {
  return (
    <div className="quote-container">
      <p className="quote">{prop.quote}</p>
    </div>
  );
};

export default Quote;
