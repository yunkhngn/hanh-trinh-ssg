import React from 'react'
import {Template} from '../components/template'
import {desc} from '../components/lib/'
import {Prj} from '../components/content/'

const contentful = require('contentful');
const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  environment: process.env.CONTENTFUL_ENVIRONMENT,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

const project = ({data}) => {
  return (
    <Template meta={desc.project}>
      <Prj data={data}/>
    </Template>
  )
}

export async function getStaticProps() {
  const response = await client.getEntries({
    content_type: 'project',
  });
  const data = response.items.map((item) => {
    return {
      id: item.sys.id,
      name: item.fields.name,
      slug: item.fields.slug,
      genre: item.fields.genre,
      description: item.fields.description,
      image: "https:" + item.fields.image[0].fields.file.url,
      year: item.fields.year,
      group: item.fields.group,
    };
  })
  const groupedData = Object.entries(data.reduce((acc, project) => {
    const { year } = project;
  
    if (!acc[year]) {
      acc[year] = [];
    }
  
    acc[year].push(project);
  
    return acc;
  }, {}))
  .map(([year, projects]) => ({ year: Number(year), projects }))
  .sort((a, b) => b.year - a.year);

  return {
    props: {
      data: groupedData
    },
    revalidate: 60
  };
}


export default project