import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';
import dealsimg1 from '../images/dealsImg 1.png';
import dealsimg2 from '../images/dealsImg 2.png';
import dealsimg3 from '../images/dealsImg 3.png';
import dealsimg4 from '../images/dealsImg 4.png';

const BigCards2 = () => {
    return (
        <div>
            <Container fluid className="mt-5">
                <h1>Exclusive Deals</h1>
                <Row>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Img variant="top" src={dealsimg1} />

                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Img variant="top" src={dealsimg2} />

                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Img variant="top" src={dealsimg3} />

                        </Card>
                    </Col>
                    <Col md={3} xs={6}>
                        <Card>
                            <Card.Img variant="top" src={dealsimg4} />
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BigCards2;
