//voter view
import { Card ,Button, Container, Row, Col} from "react-bootstrap";
import { useState } from "react";

//load canidates,
//select candidate(s) using selection use radio buttons na lang

export default function Vote(){
    return(
        <div>
            <h1>Dashboard</h1>

            <Container>
                <h1>President</h1>
                <Row>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <img src="img/placeholder.svg"></img>
                            <Card.Body>
                                <Card.Title>Candidate 1</Card.Title>
                                <Card.Text>
                                Candidate Description
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card style={{ width: '18rem' }}>
                            <img src="img/placeholder.svg"></img>
                            <Card.Body>
                                <Card.Title>Candidate 1</Card.Title>
                                <Card.Text>
                                Candidate Description
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>

                <Row>

                </Row>
            </Container>

            
        </div>
    );
}