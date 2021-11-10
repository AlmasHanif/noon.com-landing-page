import React from 'react';
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import menswearimg1 from '../images/mensWearImg 1.png';
import menswearimg2 from '../images/mensWearImg 2.png';
import menswearimg3 from '../images/mensWearImg 3.png';
import menswearimg4 from '../images/mensWearImg 4.png';
import menswearimg5 from '../images/mensWearImg 5.png';
import menswearimg6 from '../images/mensWearImg 6.png';

const MensCollections = () => {
    return (
        <div>
             <Container fluid className="mt-5 ">
            <h1 className="text-danger fw-bold my-3">Buy 1 Get 1 Free</h1>
                <Row>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={menswearimg1} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={menswearimg2} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={menswearimg3} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={menswearimg4} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={menswearimg5} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={menswearimg6} />

                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default MensCollections
