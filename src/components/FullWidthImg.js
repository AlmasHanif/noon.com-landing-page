import React from 'react'
import { Col, Container, Row, Card } from 'react-bootstrap';

const FullWidthImg = ({fullimg}) => {
    return (
        <div>
             <Container fluid className="mt-5">
                
                <Row>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={fullimg} />

                        </Card>
                    </Col>
                </Row>
                </Container>    
        </div>
    )
}

export default FullWidthImg
