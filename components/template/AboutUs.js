import React from 'react'
import {Div, Text} from 'atomize'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <Div
    justify="center"
    align="center"
    m="auto"
    d="flex"
    flexDir="column"
    >
      <div className="avatar">
        <Image
          src="/logo.png"
          alt="Picture of team"
          width={300}
          height={300}
          priority={true}
          style={{
            borderRadius: "50%",
            marginBottom: "2em",
            border: "7px solid #0A1F44"
          }}
          onDragStart={(e) => e.preventDefault()}
        />
        <Text
        textSize="display2"
        textWeight="600"
        m="auto"
        >Hành Trình SSG</Text>
        <Text
        textSize="subheader"
        color="black400"
        m={{b: "2em" }}
        >Một dự án của các sinh viên trường đại học FPT</Text>
        <Text
        textSize="heading"
        m={{ t: "1em" }}
        w={{xs: "100%", md:"60%"}}
        >Dự án “Hành trình SSG” nhằm mục đích tổng hợp và chia sẻ thông tin về các dự án từ các lớp và khóa học trước trong môn SGG - Kỹ năng Giao tiếp và Cộng tác. Trang web này sẽ là nơi trưng bày các dự án đa dạng như thiện nguyện, short film, workshop, gây quỹ, và talkshow. Mục tiêu sẽ là tạo ra một trang web giúp sinh viên hiện tại và tương lai dễ dàng tiếp cận thông tin, học hỏi từ những dự án đã thành công, và khuyến khích họ đóng góp ý tưởng sáng tạo cho các hoạt động tiếp theo.
        </Text>
        <Text
        textSize="subheader"
        m={{ t: "1em" }}
        w={{xs: "100%", md:"60%"}}
        ><q>Dự án không chỉ giúp phát triển kỹ năng làm việc nhóm và giao tiếp của sinh viên mà còn cung cấp nguồn tài liệu tham khảo hữu ích, khơi gợi cảm hứng cho các khóa học tương lai. Chúng em đề xuất xây dựng website có giao diện thân thiện, với hệ thống tìm kiếm dễ sử dụng và tính năng lọc theo loại dự án, năm học, và lớp học.</q></Text>
      </div>
    </Div>
  )
}

export default AboutUs