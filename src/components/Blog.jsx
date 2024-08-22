import { useState } from "react"
import blogService from '../services/blogs'

const Blog = ({ blog, updateObject }) => {
  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const [visible, setVisible] = useState(false)
  const [blogs, setBlogs] = useState([])

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  const updateBlog = () => {
    updateObject = {
      likes: 1
    }
    console.log(blog.id)
    blogService
      .update(blog.id, updateObject)
        .then(returnedBlog => {
          console.log(returnedBlog, 'response')
        setBlogs(blogs.concat(returnedBlog))
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
        likes {blog.likes} <button onClick={updateBlog}>like</button>
        <br />
        {blog.author}
      </div>
  </div>
)}
export default Blog