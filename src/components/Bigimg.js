import React from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';
import bigImg1 from '../images/bigImg 1.png';
import bigImg2 from '../images/bigImg 2.png';

const Bigimg = () => {
    return (
        <div>
            <Container fluid className="mt-4">
                <Row>
                    <Col xs={6} md={6}>
                        <Image src={bigImg1} fluid rounded />
                    </Col>
                    <Col xs={6} md={6}>
                        <Image src={bigImg2} fluid rounded />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Bigimg
