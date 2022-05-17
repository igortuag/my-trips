import { MapProps } from 'components/Map'
import HomeTemplate from 'templates/Home'

export default function Home({ places }: MapProps) {
  return <HomeTemplate places={places} />
}
