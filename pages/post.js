import React from 'react'
import {Template} from '../components/template'
import {desc} from '../components/lib/'
import {Poster} from '../components/content/'
import { htmlToText } from 'html-to-text';
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';

const contentful = require('contentful');

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});


const truncateHtml = (htmlString, maxLength) =>{
  const text = htmlToText(documentToHtmlString(htmlString), {
    wordwrap: false
  });
  if (text.length > maxLength) {
    return text.slice(0, maxLength) + '...';
  }

  return text;
}

const post = ({data}) => {
  return (
    <Template meta={desc.post}>
     <Poster data={data}/>
    </Template>
  )
}

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: 'blogPost'
  });
  const content = response.items.map(item => ({
    title: item.fields.title,
    slug: item.fields.slug,
    date: item.sys.createdAt,
    img: 'https:' + item.fields.img.fields.file.url,
    description: truncateHtml(item.fields.rich,200),
  }))
  content.sort((a, b) => new Date(b.date) - new Date(a.date));
  return {
    props: {
      data: content
    },
    revalidate: 60 // ISR sau mỗi 60 giây
  };
}

export default post