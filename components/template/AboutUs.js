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
        </div>
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
        textSize="title"
        m={{ t: "1em" }}
        w={{xs: "100%", md:"60%"}}
        >Trong các khóa học trước của môn học SSG, sinh viên đã thực hiện nhiều dự án sáng tạo như tổ chức talkshow, làm phim ngắn, thực hiện các chiến dịch gây quỹ, và điều phối các hoạt động thiện nguyện. Những dự án này không chỉ là kết quả của sự làm việc nhóm mà còn phản ánh sự phát triển kỹ năng giao tiếp và điều phối của sinh viên.<br/><br/>
        Tuy nhiên, hiện tại trang Facebook “Dự án Kỹ năng mềm - FPT University” chưa đáp ứng được yêu cầu là nơi sắp xếp dễ tìm thể loại dự án dễ dàng và chưa có một trang web tập trung để lưu trữ và chia sẻ thông tin về các dự án này. Điều này làm giảm khả năng học hỏi và tham khảo từ các dự án trước đó, gây khó khăn trong việc xây dựng ý tưởng mới. Việc thiếu một cơ sở dữ liệu trực quan và dễ tiếp cận cũng hạn chế sự kết nối giữa các thế hệ sinh viên.<br/><br/>
        Vì vậy, dự án “Hành trình SSG” ra đời nhằm đáp ứng nhu cầu này, đồng thời tạo ra một không gian để chia sẻ, lưu trữ và trưng bày thành quả của sinh viên qua các năm. Chúng tớ hy vọng rằng với sự ra đời của dự án này, các bạn sinh viên sẽ có thêm nhiều cơ hội để học hỏi, phát triển và kết nối với nhau.<br/>
        </Text>
        <Text
        textSize="subheader"
        m={{ t: "1em" }}
        w={{xs: "100%", md:"60%"}}
        ><q>Dự án không chỉ giúp phát triển kỹ năng làm việc nhóm và giao tiếp của sinh viên mà còn cung cấp nguồn tài liệu tham khảo hữu ích, khơi gợi cảm hứng cho các khóa học tương lai.</q></Text>
    </Div>
  )
}

export default AboutUs