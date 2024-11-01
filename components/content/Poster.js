import React from 'react'
import {Title, Footer} from '../template'
import Link from 'next/link'
import {Div, Text} from 'atomize'
import Image from 'next/image'
import { useState } from 'react'
const Poster = ({data}) => {
  const [loaded, setLoaded] = useState(false);
  const handleImageLoad = () => {
    setLoaded(true);
  };
  return (
    <section className='poster wrapper'>
        <Title 
        label="Các bài viết về dự án Hành Trình SSG và môn học SSG104 đã được đăng tải trên fanpage của dự án."
        pre="/ Post."
        size="display3"
        >Bài đăng</Title>
        <div className='poster__content'>
          {data.map((item, index) => (
            <Link href={`/post/${item.slug}`} key={index} passHref>
            <Div 
            p="1em 1em 3em"
            hoverBg="gray200"
            rounded="md"
            transition
            >
              <div className={"poster__image "+ (loaded ? "" : "skeleton")}>
                <Image src={item.img} alt={item.title}
                    fill
                    loading="lazy"
                    quality={50}
                    onLoad={handleImageLoad}
                    style={{
                      objectFit: 'cover',
                      borderRadius: '10px',
                    }}
                    />
              </div>
             <Text
             m={{ b: "1rem" }}
             textSize="title"
              textWeight="bold"
             >{item.title}</Text>
             <Text
             m={{ b: "1rem" }}
            
             >{item.description}</Text>
               <p className="linkTo">Đọc thêm</p>
            </Div>
            </Link>
          ))}
        </div>
        <Footer/>
    </section>
  )
}

export default Poster