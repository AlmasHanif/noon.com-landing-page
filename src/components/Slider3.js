import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import slider3img1 from '../images/slider3img 1.png';
import slider3img2 from '../images/slider3img 2.gif';
import slider3img3 from '../images/slider3img 3.png';

import { Container } from 'react-bootstrap';

function Slider3() {
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
                        src={slider3img1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3img2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={slider3img3}
                        alt="Second slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}

export default Slider3;
