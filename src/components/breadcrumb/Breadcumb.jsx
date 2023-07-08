import { Row, Col, Breadcrumb, BreadcrumbItem } from "reactstrap";
import { Link } from 'react-router-dom';

const Breadcrumbs = () => {
  return (
    <Row>
      <Col>
        <Breadcrumb>
          <BreadcrumbItem>
            <Link>Home</Link>
          </BreadcrumbItem>
        </Breadcrumb>
      </Col>
    </Row>
  );
};

export default Breadcrumbs;
