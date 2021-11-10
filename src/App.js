import React from 'react';
import BigCards from './components/BigCards';
import BigCards2 from './components/BigCards2';
import BigCards3 from './components/BigCards3';
import Bigimg from './components/Bigimg';
import BrandsName from './components/BrandsName';
import CircleImg from './components/CircleImg';
import Footer from './components/Footer';
import FullWidthImg from './components/FullWidthImg';
import MensCollections from './components/MensCollections';
import MenuNavbar from './components/MenuNavbar';
import MyNavbar from './components/MyNavbar';
import Slider2 from './components/Slider2';
import Slider3 from './components/Slider3';
import ControlledCarousel from './components/Sliders';
import SmallCards from './components/SmallCards';
import WomenCollections from './components/WomenCollections';
import fullimg1 from './images/fullwidthimg 1.gif';
import fullimg2 from './images/fullwidthimg 2.gif';
import fullimg3 from './images/fullwidthimg 3.gif';
import fullimg4 from './images/fullwidthimg 4.png';
import FixButton from './components/FixButton';

const App = () => {
  return (
    <div>
      <MyNavbar/>
      <MenuNavbar />
      <ControlledCarousel />
      <CircleImg />
      <Bigimg />
      <SmallCards />
      <BigCards />
      <Slider2 />
      <SmallCards />
      <Slider3 />
      <BigCards2 />
      <BigCards3 />
      <CircleImg />
      <FullWidthImg  fullimg={fullimg1}/>
      <FullWidthImg  fullimg={fullimg2}/>
      <FullWidthImg  fullimg={fullimg3}/>
      <FullWidthImg  fullimg={fullimg4}/>
      <BrandsName />
      <MensCollections />
      <WomenCollections />
      <Footer />
      
      {/* <Button as={Col} variant="primary">Button #1</Button> */}

    </div>
  )
}

export default App
