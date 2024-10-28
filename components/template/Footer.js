import React from "react";
import { Div, Text } from "atomize";
import Image from "next/image";
const Footer = () => {
  return (
    <Div m={{t: "5em"}}>
      <hr className="footerHR" />
      <Div
      w="100%"
      m={{ t: "3em" }}
      p={{y: "1em"}}
     d={{ xs: "block", md: "flex" }}
   justify="space-between"
      >
        <Div
        w={{ xs: "100%", md: "40%" }}
        textAlign="left"
        d="flex"
        justify="center"
        align="center"
        flexDir="column"
        >
            <Image
                src="/logo.svg"
                alt="Logo"
                width={100}
                height={100}     
            />
        </Div>
        <Div
        w={{ xs: "100%", md: "60%" }}
        m={{ t: { xs: "3em", md: "0" } }}
        >
            <Text
            textSize="subheader"
            >Hành trình SSG là kho lưu trữ các dự án SSG qua các kỳ, đồng thời là cầu nối kết nối các thế hệ sinh viên. Tại đây, sinh viên có thể chia sẻ và học hỏi từ những kinh nghiệm thực tế của các dự án SSG trước đây.</Text>
            <Text
            m={{t: "2em"}}
            textSize="subheader"
            >Email: hanhtrinhssg@gmail.com</Text>
            <Text
            textSize="subheader"
            >Tel: 0376971168 (Mr. Khoa)</Text>
        </Div>
      </Div>
      <hr className="footerHR" />
      <Div d="flex" justify="space-between" m={{ t: "2rem" }}>
        <Text textSize="body" textColor="gray800">
          Copyright © Hành Trình SSG
        </Text>
        <Text textSize="body" textColor="gray800">
          By Skibidi Team
        </Text>
      </Div>
    </Div>
  );
};

export default Footer;
