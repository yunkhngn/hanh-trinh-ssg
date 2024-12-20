import React from "react";
import { ShowCase, AboutUs, Title, Footer, ImageFull } from "@/components/template";

const Homepage = () => {
  return (
    <section>
      <ShowCase />
      <div id="homePageTag" className="wrapper">
        <Title
          label="Giới thiệu thông tin về dự án Hành Trình SSG."
          pre="/."
          size="display2"
        >
          Tổng quan dự án
        </Title>
        <AboutUs />
        <ImageFull img="/stock/stock-2.jpg" text="homeImage" />
        <Footer />
      </div>
    </section>
  );
};

export default Homepage;
