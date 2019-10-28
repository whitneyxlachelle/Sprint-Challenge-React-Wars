import React from "react";
import { Card, CardTitle, Col } from 'reactstrap';


const StarWarsCard = (props) => {
    return (
        <div>
            <Col sm={{ size: 'auto', offset: 1 }}>
                <Card body outline color="secondary">
                    <CardTitle>{props.name}</CardTitle>
                    <CardTitle>{props.gender}</CardTitle>
                    <CardTitle>{props.year}</CardTitle>
                </Card>
            </Col>
        </div>

        /* <div className = "star-wars-card" key={props.index}>
   <h1>{props.name}</h1>
   <h2>{props.gender}</h2>
   <h3>{props.year}</h3>
</div> */

    );
};

export default StarWarsCard; 