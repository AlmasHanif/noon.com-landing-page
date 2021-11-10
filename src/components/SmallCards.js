import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import smallImg1 from '../images/smallcardimg 1.jpg';
import smallImg2 from '../images/smallcardimg 2.jpg';
import smallImg3 from '../images/smallcardimg 3.jpg';
import smallImg4 from '../images/smallcardimg 4.jpg';
import smallImg5 from '../images/smallcardimg 5.jpg';
import smallImg6 from '../images/smallcardimg 6.jpg';

const SmallCards = () => {
    return (
        <div>
            <Container fluid className="mt-4">
                <h2>Recommended for you</h2>
                <Row>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={smallImg1} />
                            <Card.Body>
                                <Card.Title>HUAWEI</Card.Title>
                                <Card.Text>
                                    Band 6 <br /> Graphite Black <br /> AED <strong>167.95</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={smallImg2} />
                            <Card.Body>
                                <Card.Title>HUAWEI</Card.Title>
                                <Card.Text>
                                    Band 6 <br /> Graphite Black <br /> AED <strong>167.95</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={smallImg3} />
                            <Card.Body>
                                <Card.Title>HUAWEI</Card.Title>
                                <Card.Text>
                                    Band 6 <br /> Graphite Black <br /> AED <strong>167.95</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={smallImg4} />
                            <Card.Body>
                                <Card.Title>HUAWEI</Card.Title>
                                <Card.Text>
                                    Band 6 <br /> Graphite Black <br /> AED <strong>167.95</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={smallImg5} />
                            <Card.Body>
                                <Card.Title>HUAWEI</Card.Title>
                                <Card.Text>
                                    Band 6 <br /> Graphite Black <br /> AED <strong>167.95</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={2} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={smallImg6} />
                            <Card.Body>
                                <Card.Title>HUAWEI</Card.Title>
                                <Card.Text>
                                    Band 6 <br /> Graphite Black <br /> AED <strong>167.95</strong>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                </Row>
            </Container>
        </div >
    )
}

export default SmallCards
