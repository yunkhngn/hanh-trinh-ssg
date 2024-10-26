import React from 'react'
import {Div, Text} from 'atomize'
const Contact = () => {
  return (
    <Div 
    w={{ xs: "100%", md: "50%" }}
    >
        <Text
        textSize="heading"
        >Liên hệ với chúng tớ để biết thêm thông tin về dự án.</Text>
        <br/>
        <Text
        textSize="subheader"
        >Trưởng dự án: Nguyễn Đăng Khoa</Text>
        <Text
        textSize="subheader"
        >Giảng viên hướng dẫn: Khuất Thị Hoa</Text>
        <Text
        textSize="subheader"
        >Gmail: hanhtrinhssg@gmail.com</Text>
        <Text
        textSize="subheader"
        >Facebook: Hành Trình SSG</Text>
    </Div>
  )
}

export default Contact