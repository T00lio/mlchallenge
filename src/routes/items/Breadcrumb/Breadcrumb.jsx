import { Row, Col, Breadcrumb, BreadcrumbItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Breadcrumb.css";

const BreadcrumbComponent = () => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Home</Link>
          </BreadcrumbItem>
          <BreadcrumbItem>
            <Link to="/items">Items</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Item</BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default BreadcrumbComponent;
