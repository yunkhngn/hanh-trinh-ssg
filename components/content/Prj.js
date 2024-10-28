import React from "react";
import { Title, Footer } from "../template";
import Link from "next/link";
import { Div, Text } from "atomize";
import Image from "next/image";

const Prj = ({ data }) => {
  const truncateHtml = (str, length) => {
    const div = document.createElement("div");
    div.innerHTML = str;
    let text = div.textContent || div.innerText || "";
    if (text.length <= length) {
      return text;
    }
    text = text.substring(0, length);
    const last = text.lastIndexOf(" ");
    text = text.substring(0, last);
    return text + "...";
  }
  return (
    <section className="poster wrapper">
      <Title label="Các dự án SSG đã được đi vào hoạt động." pre="/ Project." size="display3">
        Dự án
      </Title>

      {data.map((item, index) => (
        <Div key={index}>
          <Div m={{ t: { xs: "3em", md: "5em" }, b:"1em" }}>
            <div className="path">
              <Text textSize="heading" textWeight="500">
                  <strong>Năm {item.year}</strong>
              </Text>
            </div>
          </Div>
          <div className='poster__content'>
            {item.projects.map((project, index) => (
              <Link href={`/project/${project.slug}`} key={index} passHref>
              <Div 
              p="1em 1em 3em"
              hoverBg="gray200"
              rounded="md"
              transition
              >
                <div className='poster__image'>
                  <Image src={project.image} alt={project.name}
                      fill
                      loading="lazy"
                      style={{
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                      />
                </div>
               <Text
               textSize="title"
                textWeight="bold"
               >{project.name}</Text>
               <Text
               m={{ b: "1rem" }}
               textSize="subheader"
               >{project.genre}</Text>
               <Text
               m={{ b: "1rem" }}
              
               >{truncateHtml(project.description, 100)}</Text>
                 <p className="linkTo">Tìm hiểu thêm</p>
              </Div>
              </Link>
            ))}
          </div>
        </Div>
      ))}

      <Footer />
    </section>
  );
};

export default Prj;
