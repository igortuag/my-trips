import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

export type PlaceTemplateProps = {
  heading: string
  body: string
}

const PlaceTemplate = ({ heading, body }: PlaceTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>{heading}</S.Heading>

    <S.Body
      dangerouslySetInnerHTML={{
        __html: body
      }}
    />
  </S.Content>
)

export default PlaceTemplate
