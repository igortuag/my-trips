import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

type ImageProps = {
  url: string
  height: number
  width: number
}

export type PlaceTemplateProps = {
  place: {
    slug: string
    name: string
    description: {
      html: string
    }
    galery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>{place.name}</S.Heading>

    <S.Body
      dangerouslySetInnerHTML={{
        __html: place.description.html
      }}
    />

    {place.galery.map(({ url, height, width }, index) => (
      <S.Image key={index} src={url} height={height} width={width} />
    ))}
  </S.Content>
)

export default PlaceTemplate
