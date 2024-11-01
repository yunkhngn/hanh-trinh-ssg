import React from 'react'
import {Title, Footer, Contact} from '../template'

const Mail = () => {
  return (
    <section className='contact wrapper'>
        <Title 
        label="Liên hệ với dự án Hành Trình SSG."
        pre="/ Contact."
        size="display3"
        >Liên hệ</Title>
        <Contact/>
        <Footer/>
    </section>
  )
}

export default Mail