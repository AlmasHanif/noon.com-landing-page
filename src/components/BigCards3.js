import { Col, Container, Row, Card } from 'react-bootstrap';
import React from 'react';
import bigcard3img1 from '../images/Bigcard3img 1.png'
import bigcard3img2 from '../images/Bigcard3img 2.png'
import bigcard3img3 from '../images/Bigcard3img 3.png'

const BigCards3 = () => {
    return (
        <div>
              <Container fluid className="mt-5">
                
                <Row>
                    <Col md={4} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={bigcard3img1} />

                        </Card>
                    </Col>
                    <Col md={4} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={bigcard3img2} />

                        </Card>
                    </Col>
                    <Col md={4} xs={4}>
                        <Card>
                            <Card.Img variant="top" src={bigcard3img3} />

                        </Card>
                    </Col>
                 
                </Row>
            </Container>
        </div>
    )
}

export default BigCards3
