import Head from 'next/head'

const Meta = ({title , keywords, description,}) => {
  return (
    <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      <meta name='keywords' content={keywords} />
      <meta name='description' content={description} />
      <meta charSet='utf-8' />
      <link rel='icon' href={'/images/favicon.ico'} />
      <link rel='stylesheet' href="https://fonts.googleapis.com/css2?family=Exo+2:wght@400;700"/>
      <title>{title}</title>
    </Head>

  )
}

Meta.defaultProps = {
    title: 'Roberto Palma',
    keywords: 'Portfolio Website, Roberto Palma, programming, computer science',
    description: 'Roberto Palma\'s Personal Website',
}
export default Meta