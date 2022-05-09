import dynamic from 'next/dynamic'

const Map = dynamic(() => import('components/Map'), { ssr: false })

export default function Home() {
  return <Map
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
}
