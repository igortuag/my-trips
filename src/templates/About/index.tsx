import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from 'components/LinkWrapper'
import * as S from './styles'

const AboutTemplate = () => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} />
    </LinkWrapper>

    <S.Heading>My Trips</S.Heading>

    <S.Body>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        ratione, amet, eum quo repellat quibusdam accusamus at soluta
        voluptatem, esse vero nihil enim doloribus. Eligendi, perspiciatis?
        Dignissimos veniam aliquam omnis!
      </p>
    </S.Body>
  </S.Content>
)

export default AboutTemplate
