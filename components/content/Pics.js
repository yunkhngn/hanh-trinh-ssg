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
  const images = data[0].imgs.map((item) => {
    return {
      id: item.sys.id,
      url: 'https:' + item.fields.file.url,
    };
  }
  );
  console.log(images);
  return (
    <section className="wrapper">
    <Title 
        label="Thư viện ảnh hoạt động và logo của các dự án đã được đăng tải."
        pre="/ Gallery."
        size="display3"
        >Thư viện</Title>
    <div className="picsGallery">
      {images.length > 0 ? (images.map((item) => (
        <div key={item.id} className={"picHolder " + (loaded ? "" : "skeleton")}>
          <Image
            src={item.url}
            alt="abc"
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
