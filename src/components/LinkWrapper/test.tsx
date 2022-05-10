import { render, screen } from '@testing-library/react'

import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render', () => {
    render(<LinkWrapper />)

    expect(screen.getByTestId('link-wrapper')).toBeInTheDocument()
  })
})
