import AboutTemplate from 'templates/About'

export default function AboutPage() {
  return <AboutTemplate />
}

export const getStaticProps = async () => {
  return {
    props: {
      title: 'About'
    }
  }
}
