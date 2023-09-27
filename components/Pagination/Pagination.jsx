import React from "react";
import "./Pagination.css";
import { Pagination as PaginationMui } from "@mui/material";

function Pagination() {
  return (
    <div className="pagination">
      <PaginationMui count={10} color="primary" />
    </div>
  );
}

export default Pagination;
