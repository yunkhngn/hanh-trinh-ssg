import React from 'react'
import {Title, Footer} from '../template'
import Link from 'next/link'
import {Div, Text} from 'atomize'
import Image from 'next/image'
const Poster = ({data}) => {
  return (
    <section className='poster wrapper'>
        <Title 
        label="Bài viết về dự án Hành Trình SSG và môn học SSG."
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
              <div className='poster__image'>
                <Image src={item.img} alt={item.title}
                    fill
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