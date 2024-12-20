import React, { useState } from "react";
import { Title, Footer } from "../template";
import Link from "next/link";
import { Div, Text, Tag, Button, Input } from "atomize";
import Image from "next/image";

const Prj = ({ data }) => {
  const [selectedYear, setSelectedYear] = useState("all");
  const [selectedType, setSelectedType] = useState("all");
  const [searchText, setSearchText] = useState("");

  const [visibleProjectsByYear, setVisibleProjectsByYear] = useState(
    data.reduce((acc, item) => {
      acc[item.year] = 6;
      return acc;
    }, {})
  );

  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };

  const handleYearChange = (e) => setSelectedYear(e.target.value);
  const handleTypeChange = (e) => setSelectedType(e.target.value);
  const handleSearchChange = (e) => setSearchText(e.target.value);

  const handleShowMore = (year) => {
    setVisibleProjectsByYear((prev) => ({
      ...prev,
      [year]: prev[year] + 6,
    }));
  };

  const filterProjects = () => {
    return data
      .map((post) => {
        const filteredProjects = post.projects.filter((project) => {
          const matchesType = selectedType === "all" || project.genre === selectedType;
          const matchesSearch = project.name.toLowerCase().includes(searchText.toLowerCase());
          return matchesType && matchesSearch;
        });
  
        if (filteredProjects.length > 0) {
          return { ...post, projects: filteredProjects };
        }
        return null;
      })
      .filter((post) => {
        return post && (selectedYear === "all" || post.year === Number(selectedYear));
      });
  };

  const filteredPosts = filterProjects();

  const truncateText = (text, length) => {
    if (text.length <= length) return text;
    const truncated = text.substring(0, length);
    const lastSpace = truncated.lastIndexOf(" ");
    return truncated.substring(0, lastSpace > 0 ? lastSpace : length) + "...";
  };

  return (
    <section className="poster wrapper">
      <Title label="Các dự án SSG đã hoàn thành, được đi vào hoạt động được chúng mình tổng hợp tại kho tàng dự án." pre="/ Project." size="display3">
        Kho tàng dự án
      </Title>

      {/* Tìm kiếm */}
      <Input
        placeholder="Tìm kiếm dự án..."
        m={{ t: "1em", b: "1.5em" }}
        w={{ xs: "100%", md: "50%" }}
        h="3.5em"
        textSize="subheader"
        textColor="black"
        rounded="12px"
        focusBorderColor="gray300"
        onChange={handleSearchChange}
        transition
        border="1px solid"
        bg="#f9f9f9"
        borderColor="gray300"
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
          <option value="Thiết kế ứng dụng">Thiết kế ứng dụng</option>
          <option value="Thiện nguyện">Thiện nguyện</option>
          <option value="Làm video">Làm video</option>
          <option value="Tổ chức sự kiện">Tổ chức sự kiện</option>
          <option value="Khác">Khác</option>
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
          <div className="project__list">
            {item.projects.slice(0, visibleProjectsByYear[item.year]).map((project, projectIndex) => (
              <Link href={`/project/${project.slug}`} key={projectIndex} passHref className="prj">
                <Div 
                  p="1em 1em 3em"
                  hoverBg="gray200"
                  rounded="md"
                  transition
                  cursor="pointer"
                >
                  <div className={"project__image "+ (loaded ? "" : "")}>
                    <Image 
                      src={project.image} 
                      alt={project.name}
                      fill
                      quality={50}
                      priority={true}
                      // onLoad={handleImageLoad}
                      // loading="lazy"
                      style={{
                        objectFit: 'cover',
                        borderRadius: '10px',
                      }}
                    />
                  </div>
                  <Text textSize="title" textWeight="bold">{project.name}</Text>
                  <Div
                  d="flex"
                  m={{ t: "0.5rem" }}
                  >
                  <Tag
                  bg="#00748b"
                  textColor="success100"
                  m={{ r: "0.5rem", b: "1rem" }}
                  >{project.genre}</Tag>
                  <Tag
                  bg="gray100"
                  borderColor="gray500"
                  textColor="dark"
                  border="1px solid"
                  m={{ r: "0.5rem", b: "1rem" }}
                  >Nhóm {project.group}</Tag>
                  </Div>
                  <Text m={{ b: "1rem" }}>{truncateText(project.description, 150)}</Text>
                  <p className="linkTo">Xem thêm</p>
                </Div>
              </Link>
            ))}
          </div>
          {item.projects.length > visibleProjectsByYear[item.year] && (
            <Div m={{ t: "2rem" }} d="flex" justify="center">
              <Button 
              onClick={() => handleShowMore(item.year)}
              bg="#f8a509"
              textColor="dark"
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