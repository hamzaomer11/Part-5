import { useState } from "react"
import login from "../services/login"

const Blog = ({ blog, updateBlog, deleteBlog }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const addLikes = () => {
    updateBlog({
      ...blog,
      likes: blog.likes + 1
    })
  }

  const removeBlog = () => {
    deleteBlog({
      title: blog.title,
      author: blog.author,
      id: blog.id,
      user: blog.user
    })
  }

  return (
    <div style={blogStyle}>
      <div style={hideWhenVisible}>
        {blog.title}
        <button onClick={toggleVisibility}>view</button>
      </div>
      <div style={showWhenVisible}>
        {blog.title} <button onClick={toggleVisibility}>hide</button>
        <br />
        {blog.url} 
        <br />
        likes {blog.likes} <button onClick={addLikes}>like</button>
        <br />
        {blog.author}
        <br />
        {login === blog.user &&
          <button onClick={removeBlog}>remove</button>}
      </div>
  </div>
)}
export default Blog