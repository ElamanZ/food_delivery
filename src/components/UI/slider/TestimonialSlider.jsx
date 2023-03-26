import React from "react";
import Slider from "react-slick";

import "../../../styles/slider.css";

import ava01 from "../../../assets/images/ava-1.jpg";
import ava02 from "../../../assets/images/ava-2.jpg";
import ava03 from "../../../assets/images/ava-3.jpg";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  

  return (
    <Slider {...settings}>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          aperiam consequatur perspiciatis. Porro nulla, doloribus voluptatum
          blanditiis fugiat, odio qui beatae velit, perferendis nobis voluptas
          alias sed officiis nesciunt nemo?
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava01} alt="avatar" className="rounded" />
          <h6>Eren Yeager</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          aperiam consequatur perspiciatis. Porro nulla, doloribus voluptatum
          blanditiis fugiat, odio qui beatae velit, perferendis nobis voluptas
          alias sed officiis nesciunt nemo?
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Mikasa Ackerman</h6>
        </div>
      </div>
      <div>
        <p className="review__text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
          aperiam consequatur perspiciatis. Porro nulla, doloribus voluptatum
          blanditiis fugiat, odio qui beatae velit, perferendis nobis voluptas
          alias sed officiis nesciunt nemo?
        </p>

        <div className="slider__content d-flex align-items-center gap-3">
          <img src={ava03} alt="avatar" className="rounded" />
          <h6>Armin Arlert</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
