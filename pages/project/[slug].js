import { Template, Footer } from '@/components/template';
import React from 'react'
import { Text, Div, Tag, Anchor, Icon } from "atomize";
import Link from 'next/link';
import Image from 'next/image';

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

export async function getStaticPaths() {
    // Fetch all posts to get slugs for each post
    const response = await client.getEntries({ content_type: "project" });
  
    const paths = response.items.map((item) => ({
      params: { slug: item.fields.slug },
    }));
  
    return { paths, fallback: true };
  }

  export async function getStaticProps({ params }) {
    try {
      const response = await client.getEntries({
        content_type: "project",
        "fields.slug": params.slug,
      });
  
      if (response.items.length > 0) {
        const item = response.items[0];
        console.log(item)
        const postData = {
            id: item.sys.id,
            name: item.fields.name,
            slug: item.fields.slug,
            genre: item.fields.genre,
            guider: item.fields.guider,
            description: item.fields.description,
            image: item.fields.image,
            link: item.fields.link,
            year: item.fields.year,
            group: item.fields.group,
            references: item.fields.references,
        };
  
        return {
          props: { data: postData },
          revalidate: 60,
        };
      } else {
        return {
          notFound: true,
        };
      }
    } catch (error) {
      console.error("Error fetching post:", error);
      return { notFound: true };
    }
  }

const ProjectInfo = ({data}) => {
  console.log(data)
  if (!data) {
    return <div>Project not found.</div>;
  }
  const desc = {
    title: `${data.name}`,
    description: `${data.description}`,
    url: `https://hanhtrinhssg.tech/project/${data.slug}`,
    img: "https:" + data.image[0].fields.file.url,
  };
  return (
    <Template meta={desc}>
        <div className='wrapper'>
        <Div m={{ t: {xs:"3em", md:"5em"}}}>
      <div className="path">
        <Text textSize="subheader" textWeight="500">
           <Link href="/project"><strong>Project</strong></Link> / {data.name}
        </Text>
      </div>
      <Text textSize="display3" m={{ b: "10px", t: "20px" }} textWeight="550">
        {data.name}
      </Text>
      <Div d="flex" flexDir="row" m={{b:"2em"}} >
        <Tag
          bg="brand700"
          textColor="white"
          m={{ r: "0.5rem", b: "1rem" }}
        >
          Dự án {data.genre}
        </Tag>
        <Tag
          bg="white"
          textColor="success700"
          border="1px solid"
          borderColor="success500"
          m={{ r: "0.5rem", b: "1rem" }}
        >
         Năm {data.year}
        </Tag>
        <Anchor href={data.link} target="_blank">
        <Tag
          hoverBg="info200"
          m={{ r: "0.5rem", b: "1rem" }}
          prefix={<Icon name="Link" size="12px" m={{ r: "0.25rem" }} />}
          cursor="pointer"
        >
          Link Facebook
        </Tag>
      </Anchor>
      </Div>
      <hr className="seperate"/>
      <Text textSize="subheader" m={{ b: "10px", t: "10px" }}>
       Nhóm thực hiện: <strong>{data.group}</strong>
      </Text>
      <Text textSize="subheader" m={{ b: "10px", t: "10px" }}>
       Giảng viên hướng dẫn: <strong>{data.guider}</strong>
      </Text>
      <Text textSize="subheader" m={{ b: "10px", t: "10px" }}>
        Năm thực hiện: <strong>{data.year}</strong>
      </Text>
      <Text textSize="subheader" w={{xs: "90%", md:"60%"}} m={{ b: "2em" }}>
        <strong>Tóm tắt:<br/></strong> {data.description}
      </Text>
      <hr className="seperate"/>
      <div className="picsGallery">
      {data.image.length > 0 ? (data.image.map((item,index) => (
        <div key={index} className="picHolder">
          <Image
            src={"https:" + item.fields.file.url}
            alt={item.fields.title}
            fill
            loading="lazy"
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
    <Text textSize="subheader" w={{xs: "90%", md:"60%"}} m={{ t: "2em" }}>
        <strong>References:</strong> {data.references}
      </Text>
      <hr className="seperate"/>
    </Div>
        <Link href="/project">
            <Text
            textColor="gray900"
            m={{ t: "2em" }}
            textSize="subheader"

            >← Quay lại</Text>
        </Link>
        <Footer/>
        </div>
    </Template>
  )
}

export default ProjectInfo