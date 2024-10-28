import React from "react";
import Image from "next/image";
import { Div } from "atomize";
import {Title, Footer} from '../template'
import { useState } from "react";

const Pics = ({ data }) => {
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <section className="wrapper">
    <Title 
        label="Thư viện ảnh của các dự án."
        pre="/ Gallery."
        size="display3"
        >Thư viện</Title>
    <div className="picsGallery">
      {data.length > 0 ? (data.map((item) => (
        <div key={item.id} className={"picHolder " + (loaded ? "" : "skeleton")}>
          <Image
            src={item.image}
            alt={item.title}
            fill
            loading="lazy"
            onLoad={handleImageLoad}
            quality={50}
            style={{
              objectFit: "cover",
            }}
            onDragStart={(e) => e.preventDefault()}
          />
        </div>
      ))) : 
      <Div>
        Chưa có ảnh nào được đăng tải...
      </Div>
      }
    </div>
    <Footer/>
    </section>
  );
};

export default Pics;
