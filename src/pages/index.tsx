import dynamic from 'next/dynamic'
import { InfoOutline } from '@styled-icons/evaicons-outline/InfoOutline'
import LinkWrapper from 'components/LinkWrapper'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return (
    <>
      <LinkWrapper href="/about">
        <InfoOutline />
      </LinkWrapper>
      <Map
        places={[
          {
            id: '1',
            name: 'Island',
            slug: 'island',
            location: {
              latitude: 65,
              longitude: -18
            }
          }
        ]}
      />
    </>
  )
}
