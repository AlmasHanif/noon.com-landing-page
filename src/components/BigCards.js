import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';
import bigCardImg1 from '../images/bigcardimg 1.png';
import bigCardImg2 from '../images/bigcardimg 2.png';
import bigCardImg3 from '../images/bigcardimg 3.png';
import bigCardImg4 from '../images/bigcardimg 4.png';

const BigCards = () => {
    return (
        <div>
            <Container fluid className="mt-5">
                <h1>Mega Deals</h1>
                <Row>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Img variant="top" src={bigCardImg1} />

                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Img variant="top" src={bigCardImg2} />

                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Img variant="top" src={bigCardImg3} />

                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Img variant="top" src={bigCardImg4} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BigCards
