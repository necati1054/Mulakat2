import {
  Card,
  CardBody,
  CardSubtitle,
  CardText,
  CardTitle,
  Col,
  Container,
  Nav,
  NavItem,
  NavLink,
  Row,
} from "reactstrap";

import {Link} from "react-router-dom";

const BlankLayout = (props) => {
  return (
    <Container fluid>
      <Nav>
        <NavItem>
          <Link to="/">
            <NavLink>
              Banka Ekle
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/uygunkredifaizi">
            <NavLink>
              Uygun kredi Faizi Bul
            </NavLink>
          </Link>
        </NavItem>
        <NavItem>
          <Link to="/mevduatfaizi">
            <NavLink>
              Mevduat Faizi Bul
            </NavLink>
          </Link>
        </NavItem>
      </Nav>

      <Row className="px-3">
        <Col>
          <Card>
            <CardBody>
              <CardTitle tag="h5" className="mb-4">
                {props.title}
              </CardTitle>
              {props.children}
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BlankLayout;
