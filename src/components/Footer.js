import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import Image from 'react-bootstrap/Image'
import { ArrowRight, Facebook, Instagram, Twitter, Linkedin, InfoCircle, Envelope } from 'react-bootstrap-icons';
import appStore from '../images/app-store.svg'
import gooleplay from '../images/google-play.svg'


const Footer = () => {
    return (
        <div>
            <Container fluid className="my-5 bg-light">
                <Row>
                    <Col md={8}>
                        <h3>
                            We're Always Here To Help
                        </h3>
                        <p>
                            Reach out to us through any of these support channels
                        </p>
                    </Col>
                    <Col md={2}>
                        <p>HELP CENTER</p>
                        <h5> <InfoCircle /> help.noon.com</h5>
                    </Col>
                    <Col md={2}>
                        <p>EMAIL SUPPORT</p>
                        <h5>  <Envelope /> care@noon.com</h5>
                    </Col>
                </Row>

            </Container>

            <Container fluid>
                <Row>
                    <Col>
                        <h6>  ELECTRONICS </h6>
                        <p style={{ fontSize: 13 }}>
                            Mobiles  <br />
                            Tablets <br />
                            Laptops <br />
                            Home Appliances <br />
                            Camera, Photo & Video <br />
                            Televisions <br />
                            Headphones <br />
                            Video Game <br />
                        </p>
                    </Col>
                    <Col>
                        <h6>   FASHION </h6>
                        <p style={{ fontSize: 13 }}>
                            Women's Fashion <br />
                            Men's Fashion <br />
                            Girls' Fashion <br />
                            Boys' Fashion <br />
                            Watches <br />
                            Jewellery <br />
                            Women's Handbags <br />
                            Men's Eyewear <br />
                        </p>
                    </Col>
                    <Col>
                        <h6>  HOME AND KITCHEN </h6>
                        <p style={{ fontSize: 13 }}>


                            Bath <br />
                            Home Decor <br />
                            Kitchen & Dining <br />
                            Tools & Home Improvement <br />
                            Audio & Video <br />
                            Furniture <br />
                            Patio, Lawn & Garden <br />
                            Pet Supplies <br />
                        </p>
                    </Col>
                    <Col>
                        <h6> BEAUTY </h6>
                        <p style={{ fontSize: 13 }}>


                            Fragrance <br />
                            Make-Up <br />
                            Haircare <br />
                            Skincare <br />
                            Personal Care <br />
                            Tools & Accessories <br />
                            Men's Grooming <br />
                            Health Care Essentials <br />
                        </p>
                    </Col>
                    <Col>
                        <h6>  BABY </h6>
                        <p style={{ fontSize: 13 }}>

                            Strollers & Prams <br />
                            Car Seats <br />
                            Feeding <br />
                            Bathing & Skincare <br />
                            Diapering <br />
                            Baby Clothing & Shoes <br />
                            Baby & Toddler Toys <br />
                            Baby Foods <br />
                        </p>
                    </Col>
                    <Col>
                        <h6>  TOP BRANDS </h6>
                        <p style={{ fontSize: 13 }}>
                            Mothercare  <br />
                            Apple  <br />
                            Nike   <br />
                            Samsung   <br />
                            Tefal  <br />
                            L'Oreal Paris   <br />
                            Skechers  <br />
                            Silsal
                        </p>
                    </Col>
                    <Col>
                        <h6>   DAILY GROCERIES </h6>
                        <p style={{ fontSize: 13 }}>


                            Fresh Produce <br />
                            Dairy & Eggs <br />
                            Bread & Bakery <br />
                            Meat & Seafood <br />
                            Breakfast Food <br />
                            Pantry Staples <br />
                            Household Supplies <br />
                            Personal Care <br />
                        </p>
                    </Col>

                </Row>
                <Row className="mt-5">
                    <Col md={6} >
                        <h6>  <span>SHOP ON THE GO</span></h6>
                        <Image src={appStore} width={150} />
                        <Image src={gooleplay} width={150} />

                    </Col>
                    <Col md={6}>
                        <h6>  <span>CONNECT WITH US</span></h6>
                        {/* <ArrowRight  size={50}/> */}
                        <Facebook color="royalblue" size={40} />
                        <Instagram color="royalblue" size={40} />
                        <Twitter color="royalblue" size={40} />
                        <Linkedin color="royalblue" size={40} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Footer
