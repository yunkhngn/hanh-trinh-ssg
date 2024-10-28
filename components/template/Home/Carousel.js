import React from "react";
import Image from "next/image";
import { Div } from "atomize";


const Carousel = () => {
  return (
    <Div
      w={{ xs: "100%", md: "50vw" }}
      justify="center"
      h={{ xs: "auto", md: "100vh" }}
    >
          <div className="carousel--img">
            <Image src="/stock/forest.jpg"
            alt="stock" 
            fill
            quality={75}
            priority={true}
            style={{ objectFit: "cover" }} />
          </div>
    </Div>
  );
};

export default Carousel;
