import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
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

})

test('clicking the button calls event handler once', async () => {
  const blog = {
    title: "test title",
    author: "test author",
    url: "test url",
    likes: "likes: 1"
  }
  
  const mockHandler = vi.fn()

  const {container} = render(<Blog blog={blog} toggleVisibility={mockHandler}/>)

  const user = userEvent.setup()
  const button = screen.getByText('view')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)

  const div = container.querySelector('.blog')
  expect(div).toHaveTextContent(
    'test url'
  )

  const div2 = container.querySelector('.blog')
  expect(div2).toHaveTextContent(
    'likes: 1'
  )

  screen.debug()
})