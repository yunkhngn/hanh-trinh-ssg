import React from 'react'
import {Title, Footer, Contact, ImageFull} from '../template'

const Mail = () => {
  return (
    <section className='contact wrapper'>
        <Title 
        label="Liên hệ với dự án Hành Trình SSG."
        pre="/ Contact."
        size="display3"
        >Liên hệ</Title>
        <Contact/>
        <ImageFull img="/stock/stock-3.jpg" text="Liên hệ với dự án Hành Trình SSG."/>
        <Footer/>
    </section>
  )
}

export default Mail