import React from "react";
import { Container, Card, CardTitle, Row, Col } from 'reactstrap';

const StarWarsCard = (props) => {
    return (
        <Container>
            <Row>
                <Col xs="6" sm="4">
                    <Card body outline color="danger">
                        <CardTitle>{props.name}</CardTitle>
                        <CardTitle>{props.gender}</CardTitle>
                        <CardTitle>{props.year}</CardTitle>
                    </Card>
                </Col>
            </Row>
        </Container>

        /* <div className = "star-wars-card" key={props.index}>
   <h1>{props.name}</h1>
   <h2>{props.gender}</h2>
   <h3>{props.year}</h3>
</div> */

    );
};

export default StarWarsCard; 