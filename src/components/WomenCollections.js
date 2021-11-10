import React from 'react';
import { Col, Container, Row, Card, Image } from 'react-bootstrap';
import womenswearimg1 from '../images/womensWearImg 1.png';
import womenswearimg2 from '../images/womensWearImg 2.png';
import womenswearimg3 from '../images/womensWearImg 3.png';
import womenswearimg4 from '../images/womensWearImg 4.png';
import womenswearimg5 from '../images/womensWearImg 5.png';
import womenswearimg6 from '../images/womensWearImg 6.png';

const WomenCollections = () => {
    return (
        <div>
             <Container fluid className="mt-5 ">
            <h1 className="text-danger fw-bold my-3">Buy 1 Get 1 Free</h1>
                <Row>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={womenswearimg1} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={womenswearimg2} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={womenswearimg3} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={womenswearimg4} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={womenswearimg5} />

                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={womenswearimg6} />

                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    )
}

export default WomenCollections
