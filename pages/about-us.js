import React from 'react'
import {Template} from '../components/template'
import {About} from '../components/content'
import {desc} from '../components/lib/'

const aboutUs = () => {
  return (
    <Template meta={desc.about}>
      <About/>
    </Template>
  )
}

export default aboutUs