import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const Breadcrumbs = () => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem className="bc">
            <Link>Home</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default Breadcrumbs;
