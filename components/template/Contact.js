import React from 'react'
import {Div, Text} from 'atomize'
const Contact = () => {
  return (
    <Div 
    w={{ xs: "100%", md: "50%" }}
    >
        <Text
        textSize="subheader"
        >Liên hệ với chúng tớ để biết thêm thông tin về dự án, hoặc có góp ý thêm về nội dung, cũng như đăng tải các dự án của các bạn.</Text>
        <br/>
        <Text
        textSize="subheader"
        ><strong>Trưởng dự án:</strong> Nguyễn Đăng Khoa</Text>
        <Text
        textSize="subheader"
        ><strong>Giảng viên hướng dẫn:</strong> Khuất Thị Hoa</Text>
        <Text
        textSize="subheader"
        ><strong>Gmail:</strong> hanhtrinhssg@gmail.com</Text>
        <Text
        textSize="subheader"
        ><strong>Facebook:</strong> <i><a href="https://facebook.com/hanhtrinhssg">Hành Trình SSG</a></i></Text>
        <Text
        textSize="subheader"
        ><strong>Đóng góp cho website:</strong> <i><a href="https://github.com/yunkhngn/hanh-trinh-ssg">Github Repository</a></i></Text>
    </Div>
  )
}

export default Contact