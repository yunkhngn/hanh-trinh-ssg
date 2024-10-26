import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { BLOCKS, INLINES } from "@contentful/rich-text-types";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import { htmlToText } from "html-to-text";
import Image from "next/image";
import { Text, Div } from "atomize";
import { Template, Footer } from "../../components/template";
import Link from "next/link";

const contentful = require("contentful");

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

import React from "react";

const options = {
    renderNode: {
      [BLOCKS.EMBEDDED_ASSET]: (node) => {
        const { file, title, description } = node.data.target.fields;
        if (file.contentType.startsWith('image/')) {
          const imageUrl = `https:${file.url}`;
          return (
            <div>
            <div className="embedPhoto">
              <Image
                src={imageUrl}
                alt={title || 'Embedded Image'}
                fill
                priority={true}
                quality={75}
                sizes="100%"
                style={{
                  objectFit: "cover",
                  borderRadius: "10px",
                }}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>
            <Text
            textColor="gray900"
            m={{ b: "2em" }}
            justify="center"
            textAlign="center"
            ><i
            >{description}</i></Text>
            </div>
          );
        }
        return null;
      },
  
      // Xử lý inline hyperlink
      [INLINES.HYPERLINK]: (node, children) => {
        const { uri } = node.data;
        return (
          <a href={uri} target="_blank" rel="noopener noreferrer" style={{ color: 'blue', textDecoration: 'none' }}>
            {children}
          </a>
        );
      },
    },
  };

export async function getStaticPaths() {
  // Fetch all posts to get slugs for each post
  const response = await client.getEntries({ content_type: "blogPost" });

  const paths = response.items.map((item) => ({
    params: { slug: item.fields.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  try {
    const response = await client.getEntries({
      content_type: "blogPost",
      "fields.slug": params.slug,
    });

    if (response.items.length > 0) {
      const item = response.items[0];
      console.log(item)
      const postData = {
        id: item.sys.id,
        Title: item.fields.title,
        Image: 'https:' + item.fields.img.fields.file.url,// Fallback if image is missing
        createdAt: item.sys.createdAt,
        Body: item.fields.rich,
        slug: item.fields.slug,
      };

      return {
        props: { post: postData },
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

const formatDate = (dateString) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${day} tháng ${month} năm ${year}.`;
  };

const WritingPage = ({ post }) => {
  if (!post) {
    return <div>Post not found.</div>;
  }
  function truncateHtml(htmlString, maxLength) {
    const text = htmlToText(documentToHtmlString(htmlString), {
      wordwrap: false,
    });
    if (text.length > maxLength) {
      return text.slice(0, maxLength) + "...";
    }

    return text;
  }
  const desc = {
    title: `${post.Title}`,
    description: truncateHtml(post.Body, 100),
    url: `https://hanhtrinhssg.vercel.app/post/${post.slug}`,
    img: post.Image,
  };

  return <Template meta={desc}>
    <div className="wrapper">
    <Div m={{ t: {xs:"3em", md:"5em"}}}>
      <div className="path">
        <Text textSize="subheader" textWeight="500">
           <Link href="/post"><strong>Post</strong></Link> / {post.Title}
        </Text>
      </div>
      <Text textSize="display3" m={{ b: "20px", t: "20px" }} textWeight="550">
        {post.Title}
      </Text>
      <Text textSize="subheader" w={{xs: "90%", md:"50%"}} m={{ b: "2em" }}>
        Đăng ngày: {formatDate(post.createdAt)}
      </Text>
      <hr className="seperate"/>

    </Div>
        <div
        className="writingText"
        >{documentToReactComponents(post.Body, options)}</div>
        <Link href="/post">
            <Text
            textColor="gray900"
            m={{ t: "2em" }}
            textSize="subheader"

            >← Quay lại</Text>
        </Link>
        <Footer/>
    </div>
    </Template>;
};

export default WritingPage;
