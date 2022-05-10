import * as S from './styles'

export type LinkWrapperProps = {
  href: string
  children: React.ReactNode
}

const LinkWrapper = ({ href, children }: LinkWrapperProps) => (
  <S.Wrapper>link-wrapper</S.Wrapper>
)

export default LinkWrapper
