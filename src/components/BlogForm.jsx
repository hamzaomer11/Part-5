const BlogForm = ({
    handleSubmit,
    handleBlogChange,
    handleAuthorChange,
    handleUrlChange,
    newBlog,
    newBlogAuthor,
    newBlogUrl
   }) => {
   return (
    <form onSubmit={handleSubmit}>
    <div>
      title:
      <input
        value={newBlog}
        onChange={handleBlogChange}
      />
    </div>
    <div>
      author:
      <input
        value={newBlogAuthor}
        onChange={handleAuthorChange}
      />
    </div>
    <div>
      url:
      <input
        value={newBlogUrl}
        onChange={handleUrlChange}
      />
    </div>
      <button type="submit">create</button>
    </form>
   )
 }
 
 export default BlogForm