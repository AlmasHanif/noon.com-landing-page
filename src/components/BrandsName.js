import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import name1 from '../images/brandsNameImg 1.png';
import name2 from '../images/brandsNameImg 2.png';
import name3 from '../images/brandsNameImg 3.png';
import name4 from '../images/brandsNameImg 4.png';
import name5 from '../images/brandsNameImg 5.png';
import name6 from '../images/brandsNameImg 6.png';
import name7 from '../images/brandsNameImg 7.png';
import name8 from '../images/brandsNameImg 8.png';
import name9 from '../images/brandsNameImg 9.png';
import name10 from '../images/brandsNameImg 10.png';
import name11 from '../images/brandsNameImg 11.png';
import name12 from '../images/brandsNameImg 12.png';
import name13 from '../images/brandsNameImg 13.png';
import name14 from '../images/brandsNameImg 14.png';


const BrandsName = () => {
    return (
        <div>
            <Container fluid className=" bg-light text-danger">
                <h1 className="text-center my-4 fw-bolder">Brands Bargains</h1>
                <Row>
                    <Col>

                        <Card.Img variant="top" src={name1} />
                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name2} />
                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name3} />

                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name4} />

                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name5} />

                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name6} />

                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name7} />

                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col>

                        <Card.Img variant="top" src={name8} />
                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name9} />
                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name10} />

                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name11} />

                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name12} />

                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name13} />

                    </Col>
                    <Col>
                        <Card.Img variant="top" src={name14} />

                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default BrandsName
