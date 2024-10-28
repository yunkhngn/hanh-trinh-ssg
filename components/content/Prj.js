import React, { useState } from "react";
import { Title, Footer } from "../template";
import Link from "next/link";
import { Div, Text, Button } from "atomize";
import Image from "next/image";

const Prj = ({ data }) => {
  const [visibleProjectsByYear, setVisibleProjectsByYear] = useState(
    data.reduce((acc, item) => {
      acc[item.year] = 10; 
      return acc;
    }, {})
  );

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    const truncated = text.substring(0, length);
    const lastSpace = truncated.lastIndexOf(" ");
    return truncated.substring(0, lastSpace > 0 ? lastSpace : length) + "...";
  };

  const handleShowMore = (year) => {
    setVisibleProjectsByYear((prev) => ({
      ...prev,
      [year]: prev[year] + 10,
    }));
  };

  return (
    <section className="poster wrapper">
      <Title label="Các dự án SSG đã được đi vào hoạt động." pre="/ Project." size="display3">
        Dự án
      </Title>

      {data.map((item, index) => (
        <Div key={index}>
          <Div m={{ t: { xs: "3em", md: "5em" }, b: "1em" }}>
            <div className="path">
              <Text textSize="heading" textWeight="500">
                <strong>Năm {item.year}</strong>
              </Text>
            </div>
          </Div>
          <div className="poster__content">
            {item.projects.slice(0, visibleProjectsByYear[item.year]).map((project, index) => (
              <Link href={`/project/${project.slug}`} key={index} passHref>
                <Div 
                  p="1em 1em 3em"
                  hoverBg="gray200"
                  rounded="md"
                  transition
                  cursor="pointer"
                >
                  <div className="poster__image">
                    <Image 
                      src={project.image} 
                      alt={project.name}
                      fill
                      loading="lazy"
                      style={{
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                  <Text textSize="title" textWeight="bold">{project.name}</Text>
                  <Text m={{ b: "1rem" }} textSize="subheader">{project.genre}</Text>
                  <Text m={{ b: "1rem" }}>{truncateText(project.description, 150)}</Text>
                  <p className="linkTo">Tìm hiểu thêm</p>
                </Div>
              </Link>
            ))}
          </div>
          {item.projects.length > visibleProjectsByYear[item.year] && (
            <Div m={{ t: "2rem" }} d="flex" justify="center">
              <Button 
                onClick={() => handleShowMore(item.year)}
                bg="#FFE381"
                textColor="black"
                hoverBg="warning700"
                >Hiển thị thêm</Button>
            </Div>
          )}
        </Div>
      ))}

      <Footer />
    </section>
  );
};

export default Prj;