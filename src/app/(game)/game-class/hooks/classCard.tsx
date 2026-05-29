import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";

import { Class } from "../entity/classEntity";

type ClassCardProps = {
  classes: Class[];
};

export function ClassCard({ classes }: ClassCardProps) {
  return (
    <Container>
      <h1>Class test</h1>

      <Row>
        {classes.map((item) => (
          <Col key={item.id}>
            <Card>
              <CardBody>
                <CardTitle>{item.name}</CardTitle>

                <CardText>{item.description}</CardText>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
