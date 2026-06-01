import {
  Card,
  CardBody,
  CardText,
  CardTitle,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { Classes } from "../entity/classeEntity";

type ClasseCardProps = {
  classes: Classes[];
};

export function ClasseCard({ classes }: ClasseCardProps) {
  return (
    <Container>
      <h1>Classe test</h1>

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
