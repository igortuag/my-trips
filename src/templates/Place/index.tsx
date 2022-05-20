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
    gallery: ImageProps[]
  }
}

const PlaceTemplate = ({ place }: PlaceTemplateProps) => (
  <>
    <LinkWrapper href="/">
      <CloseOutline aria-label="Go back to map" size={32} />
    </LinkWrapper>

    <S.Wrapper>
      <S.Container>
        <S.Heading>{place.name}</S.Heading>
        <S.Body
          dangerouslySetInnerHTML={{
            __html: place.description.html
          }}
        />
        <S.Gallery>
          {place.gallery.map(({ url, height, width }, index) => (
            <img key={index} src={url} height={height} width={width} />
          ))}
        </S.Gallery>
      </S.Container>
    </S.Wrapper>
  </>
)

export default PlaceTemplate
