import { useLocation } from "react-router-dom";
import "./Breadcrumb.css";
import { Link } from "react-router-dom";

const Breadcrumbs = ({ current, detail }) => {
  const location = useLocation();

  let currentLink = "";

  const crumbs = location.pathname
    .split("/")
    .filter((crumb) => crumb !== "")
    .map((crumb) => {
      currentLink += `/${crumb}`;
      return (
        <div className="crumb" key={crumb}>
          <Link to={currentLink}>{crumb}</Link> {">"}
        </div>
      );
    });

  return <Link>{crumbs}</Link>;
};

export default Breadcrumbs;
