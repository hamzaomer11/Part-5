import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Blog from '../src/components/Blog'

test('renders title & author', () => {
  const blog = {
    title: "test title",
    author: "test author",
    url: "test url",
    likes: "1"
  }

  const { container } = render(<Blog blog={blog}/>)

  const div = container.querySelector('.blog')
  expect(div).toHaveTextContent(
    'test title'
  )

  const div2 = container.querySelector('.blog')
  expect(div2).toHaveTextContent(
    'test author'
  )

  screen.debug()

})