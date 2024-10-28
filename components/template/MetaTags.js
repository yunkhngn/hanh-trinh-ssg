import Head from "next/head";

const MetaTags = ({ meta }) => {
  return (
    <Head>
      <title>{meta.title}</title>
      <meta name="description" content={meta.description}/>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
      <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
      <link rel="shortcut icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />
      <meta name="msapplication-TileColor" content="#ffffff" />
      <meta name="theme-color" content="#ffffff" />
      {/* Facebook */}
      <meta property="og:site_name" content="Hành Trình SSG"></meta>
      <meta property="og:type" content="website" />
      <meta
        property="og:url"
        content={meta.url || "https://hanhtrinhssg.tech"}
      />
      <meta property="og:title" content={meta.title} />
      <meta
        property="og:description"
        content={
          meta.description ||
          'Dự án "Hành Trình SSG" là dự án được thành lập bởi sinh viên trường đại học FPT.'
        }
      />
      <meta property="og:image" content={meta.img || "https://hanhtrinhssg.tech/thumbnail.jpg"} />
      <meta property="og:image:alt" content="Hành Trình SSG" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="fb:app_id" content="1881282985689458" />
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="twitter:domain" content={meta.url} />
      <meta property="twitter:url" content={meta.url} />
      <meta name="twitter:title" content={meta.title} />
      <meta name="twitter:description" content={meta.description} />
      <meta name="twitter:image" content={meta.img || "https://hanhtrinhssg.tech/thumbnail.jpg"} />
      <meta property="twitter:image:alt" content="Hành Trình SSG"/>
      <meta property="twitter:image:width" content="1200"/>
      <meta property="twitter:image:height" content="630"/>
    </Head>
  );
};

export default MetaTags;
