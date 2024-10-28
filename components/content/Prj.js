import React, { useState } from "react";
import { Title, Footer, SearchField } from "../template";
import Link from "next/link";
import { Div, Text, Button } from "atomize";
import Image from "next/image";

const Prj = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchText, setSearchText] = useState(""); // State cho tìm kiếm

  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handleTypeChange = (e) => setSelectedType(e.target.value);
  const handleSearchChange = (e) => setSearchText(e.target.value); // Cập nhật khi tìm kiếm

  const filteredPosts = data.filter((post) => {
    const matchesYear =
      selectedYear === "all" || post.year === Number(selectedYear);
    const matchesType =
      selectedType === "all" || post.type === Number(selectedType);
    const matchesSearch =
      post.projects.some((project) =>
        project.name.toLowerCase().includes(searchText.toLowerCase())
      );

    return matchesYear && matchesType && matchesSearch;
  });

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    const truncated = text.substring(0, length);
    const lastSpace = truncated.lastIndexOf(" ");
    return truncated.substring(0, lastSpace > 0 ? lastSpace : length) + "...";
  };

  return (
    <section className="poster wrapper">
      <Title label="Các dự án SSG đã được đi vào hoạt động." pre="/ Project." size="display3">
        Dự án
      </Title>

      {/* Tìm kiếm */}
      <SearchField 
        placeholder="Tìm kiếm dự án theo tên..." 
        postName="prj"
        onChange={handleSearchChange} // Thêm onChange cho tìm kiếm
      />

      <Div d="flex">
        <select className="select" onChange={handleYearChange}>
          <option value="all">Năm</option>
          {Array.from(new Set(data.map(item => item.year))).map((year, index) => (
            <option key={index} value={year}>Năm {year}</option>
          ))}
        </select>
        <select className="select" onChange={handleTypeChange}>
          <option value="all">Dự án</option>
          <option value="1">Thiết kế ứng dụng</option>
          <option value="2">Thiện nguyện</option>
          <option value="3">Làm phim</option>
          <option value="4">Tổ chức sự kiện</option>
          <option value="5">Khác</option>
        </select>
      </Div>

      {/* Render các dự án đã lọc */}
      {filteredPosts.map((item, index) => (
        <Div key={index}>
          <Div m={{ t: { xs: "3em", md: "3em" }, b: "1em" }}>
            <div className="path">
              <Text textSize="heading" textWeight="500">
                <strong>Năm {item.year}</strong>
              </Text>
            </div>
          </Div>
          <div className="poster__content">
            {item.projects.map((project, projectIndex) => (
              <Link href={`/project/${project.slug}`} key={projectIndex} passHref className="prj">
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
                      quality={50}
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
        </Div>
      ))}

      <Footer />
    </section>
  );
};

export default Prj;