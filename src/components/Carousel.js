import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../App.css';

import main2 from '../image/main2.jpg';
import banner2 from '../image/banner2.webp';
import banner3 from '../image/banner3.webp';
import banner4 from '../image/banner4.webp';
import banner5 from '../image/banner5.webp';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
   // pauseOnHover: true,
    fade: true,
    arrows: false,
  };

  return (
    <Slider {...settings}>
      <div>
        <img class="slider" src={main2} alt="imagen1" />
      </div>
      <div>
        <img class="slider" src={banner2} alt="imagen2" />
      </div>
      <div>
        <img class="slider" src={banner4} alt="imagen3" />
      </div>
      <div>
        <img class="slider" src={banner5} alt="imagen3" />
      </div>
    </Slider>
  );
};

export default Carousel;
