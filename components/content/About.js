import React from 'react'
import {AboutUs, Title, TeamMember, Footer, ImageFull} from '../template/'

const About = () => {
  return (
    <section className='aboutUS wrapper'>
      <Title 
        label="Tổng quan về dự án Hành Trình SSG."
        pre="/ About us."
        size="display3"
        >Về dự án</Title>
      <AboutUs/>
      <Title 
        label="Giới thiệu team sáng lập và điều hành dự án."
        pre="Team member."
        size="display1"
        >Thành viên dự án</Title>
      <TeamMember/>
      <ImageFull img="/stock/stock-4.jpg" text="about us" />
      <Footer/>
    </section>
  )
}

export default About