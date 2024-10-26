import React from 'react'
import {AboutUs, Title, TeamMember, Footer} from '../template/'

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
      <Footer/>
    </section>
  )
}

export default About