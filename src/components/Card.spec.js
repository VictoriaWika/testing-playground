import { getByText, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Card from './Card'

describe('Card', () => {
  it('renders title and not a text by default', () => {
    render(<Card title="Foo" text="Bar" />)
    // getBy... -> element must exist
    // findBy... -> async (waits for element)
    // queryBy... -> returns null, if nothing is found (use it to test if something is missing)

    // screen.getByText('Foo')
    // expect(screen.getByText(/foo/i)).toBeInTheDocument()
    // expect(screen.getByText(/bar/i)).toBeInTheDocument()

    expect(screen.getByText(/foo/i)).toBeInTheDocument()
    expect(screen.queryByText(/bar/i)).not.toBeInTheDocument()
  })

  it('renders the text, if isTextVisible is true', () => {
    render(<Card isTextVisible title="Foo" text="Bar" />)
    expect(screen.getByText(/bar/i)).toBeInTheDocument()
  })

  it('calls onShowText on button click', () => {
    const onShowTextCallBack = jest.fn()

    render(<Card onShowText={onShowTextCallBack} title="Foo" text="Bar" />)
    const button = screen.getByRole('button', { name: /show text/i })
    userEvent.click(button)
    expect(onShowTextCallBack).toHaveBeenCalled()
  })
})
