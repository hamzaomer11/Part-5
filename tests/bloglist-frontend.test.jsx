import { render, screen } from '@testing-library/react'
import Blog from './Blog'

test('renders content', () => {
  const blog = {
    title: "test title",
    author: "test author",
    url: "test url",
    likes: "1"
  }

  const { container } = render(<Blog blog={blog} />)

  const div = container.querySelector('.blog')
  expect(div).toHaveTextContent(
    'test title'
  )

  const div2 = container.querySelector('.blog')
  expect(div2).toHaveTextContent(
    'test author'
  )

  const div3 = container.querySelector('.blog')
  expect(div3).not.toHaveTextContent(
    'test url'
  )

  const div4 = container.querySelector('.blog')
  expect(div4).not.toHaveTextContent(
    '1'
  )

  screen.debug()
})
