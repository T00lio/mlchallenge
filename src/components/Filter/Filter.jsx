import React from "react";

function Filter() {
  return (
    <div className="filter">
      <h4>Filters</h4>

      <div className="filter-item">
        <h5>Category</h5>
        <ul>
          <li>
            <input type="checkbox" />
            <label>Electronics</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>Home & Garden</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>Health & Beauty</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>Books</label>
          </li>
        </ul>
        <h5>Price</h5>
        <ul>
          <li>
            <input type="checkbox" />
            <label>Under $25</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>$25 to $50</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>$50 to $100</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>$100 to $200</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>$200 & Above</label>
          </li>
        </ul>
        <h>Condition</h>
        <ul>
          <li>
            <input type="checkbox" />
            <label>New</label>
          </li>
          <li>
            <input type="checkbox" />
            <label>Used</label>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Filter;
