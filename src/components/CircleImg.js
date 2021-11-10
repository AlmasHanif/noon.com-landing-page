import React from 'react';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import circleImg1 from '../images/circleImg1.png'
import circleImg2 from '../images/circleImg 2.png'
import circleImg3 from '../images/circleImg 3.png'
import circleImg4 from '../images/circleImg 4.png'
import circleImg5 from '../images/circleImg 5.png'
import circleImg6 from '../images/circleImg 6.png'
import circleImg7 from '../images/circleImg 7.png'
import circleImg8 from '../images/circleImg 8.png'
import circleImg9 from '../images/circleImg 9.png'
import circleImg10 from '../images/circleImg 10.png'
import circleImg11 from '../images/circleImg 11.png'
import circleImg12 from '../images/circleImg 12.png'


const CircleImg = () => {
    return (
        <div>
            <Container fluid className="mt-4">
                <Row md={12}>
                    <Col><img src = {circleImg1} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg2} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg3} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg4} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg5} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg6} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg7} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg8} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg9} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg10} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg11} alt=""style={{width:80}} /></Col>
                    <Col><img src = {circleImg12} alt=""style={{width:80}} /></Col>
                </Row>
            </Container>
        </div>
    )
}

export default CircleImg
