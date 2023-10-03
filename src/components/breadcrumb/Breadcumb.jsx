import React from "react";
import "./Breadcrumb.css";

const Breadcrumbs = ({ categories }) => {
  if (!categories || !Array.isArray(categories)) return null;

  return (
    <div className="bc">
      {categories.map((category, index) => (
        <div className="crumb" key={category.id}>
          {index > 0 && <span> &gt; </span>} {` `}
          <span> {category.name}</span>
        </div>
      ))}
    </div>
  );
};

export default Breadcrumbs;
