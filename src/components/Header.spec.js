import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('renders the children prop', () => {
    const { container } = render(<Header>Hello World</Header>)
    expect(container.firstChild).toHaveTextContent('Hello World')
  })
})

// container.firstChild greift auf erstes Kind eines Containers zu
