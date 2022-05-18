import client from 'graphql/client'
import { GetPageBySlugQuery, GetPlacesQuery } from 'graphql/generated/graphql'
import { GET_PAGE_BY_SLUG, GET_PLACES } from 'graphql/queries'
import { GetStaticProps } from 'next'
import { useRouter } from 'next/dist/client/router'
import PlaceTemplate, { PlaceTemplateProps } from 'templates/Place'

export default function Place({ heading, body }: PlaceTemplateProps) {
  const router = useRouter()

  if (router.isFallback) return null

  return <PlaceTemplate heading={heading} body={body} />
}

export async function getStaticPaths() {
  const { places } = await client.request<GetPlacesQuery>(GET_PLACES, {
    first: 3
  })

  const paths = places.map(({ slug }) => ({
    params: { slug }
  }))

  return { paths, fallback: true }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { page } = await client.request<GetPageBySlugQuery>(GET_PAGE_BY_SLUG, {
    slug: `${params?.slug}`
  })

  if (!page) return { notFound: true }

  return {
    props: {
      heading: page.heading,
      body: page.body.html
    }
  }
}
