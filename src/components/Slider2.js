import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import slider2img1 from '../images/2sliderimg 1.png'
import slider2img2 from '../images/2sliderimg 2.gif'
import { Container } from 'react-bootstrap';

function Slider2() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    };

    return (
        <Container fluid className="mt-5" >
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2img1}
                    alt="First slide"
                />
                <Carousel.Caption>
                    {/* <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={slider2img2}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    {/* <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
                </Carousel.Caption>
            </Carousel.Item>


        </Carousel>
        </Container>
    );
}

export default Slider2;