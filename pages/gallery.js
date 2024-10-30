import React from 'react'
import {Template} from '../components/template'
import {desc} from '../components/lib/'
import {Pics} from '../components/content/'

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const gallery = ({data}) => {
  return (
    <Template meta={desc.gallery}>
      <Pics data={data} />
    </Template>
  )
}

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: 'picture',
  });
  const data = response.items.map((item) => {
    return {
      id: item.sys.id,
      title: item.fields.title,
      imgs: item.fields.imgs,
    };
  });
  return {
    props: {
      data: data,
    },
    revalidate: 60
  };
}

export default gallery