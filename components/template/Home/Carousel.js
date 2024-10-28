import React from "react";
import Image from "next/image";
import { Button, Div } from "atomize";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Next = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        borderRadius: "16px",
        top: "50%",
        transform: "scale(1.2)",
        right: "10px",
        width: "25px",
        height: "25px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
};

const Prev = (props) => {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        position: "absolute",
        borderRadius: "16px",
        top: "50%",
        transform: "scale(1.2)",
        left: "10px",
        width: "25px",
        height: "25px",
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
        zIndex: "1",
      }}
      onClick={onClick}
    />
  );
};

const Carousel = () => {
  const img = [
    "/stock/forest.jpg",
    "/stock/post1.jpeg",
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    autoplay: true,
    slidesToScroll: 1,
    autoplaySpeed: 3000,
    cssEase: "ease-in-out",
    nextArrow: <Next />,
    prevArrow: <Prev />,
    appendDots: (dots) => (
      <div
        style={{
          position: "absolute",
          bottom: "1em",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  return (
    <Div
      w={{ xs: "100%", md: "50vw" }}
      justify="center"
      h={{ xs: "auto", md: "100vh" }}
    >
      <Slider {...settings}>
        {img.map((item, index) => (
          <div key={index} className="carousel--img">
            <Image src={item} 
            alt="stock" 
            fill
            quality={75}
            priority={true}
            style={{ objectFit: "cover" }} />
          </div>
        ))}
      </Slider>
    </Div>
  );
};

export default Carousel;
