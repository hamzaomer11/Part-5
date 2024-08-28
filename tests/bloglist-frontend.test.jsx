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

test('clicking the button calls event handler once', async () => {
  const blog = {
    title: "test title",
    author: "test author",
    url: "test url",
    likes: "1"
  }
  
  const {container} = render(<Blog blog={blog}/>)

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)

  const div = container.querySelector('.blog')
  
  expect(div).toHaveTextContent(
    '1'
  )

  expect(div).toHaveTextContent(
    'test url'
  )

  screen.debug()
})

test('clicking the like button twice calls event handler twice', async () => {
  const blog = {
    title: "test title",
    author: "test author",
    url: "test url",
    likes: "1"
  }

  const mockHandler = vi.fn()
  
  render(<Blog blog={blog} updateBlog={mockHandler}/>)

  const user = userEvent.setup()
  const button = screen.getByText('like')
  await user.click(button)
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(2)

  screen.debug()
})