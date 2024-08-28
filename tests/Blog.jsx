const Blog = ({blog, toggleVisibility}) => {

    const hideWhenVisible = { display: 'none' ? 'none' : '' }
    const showWhenVisible = { display: 'none' ? '' : 'none' }

    return (
        <div className="blog">
            <div style={hideWhenVisible}>
                {blog.title} {blog.author}
                <button onClick={toggleVisibility}>view</button>
            </div>
            <div style={showWhenVisible}>
                {blog.title} <button onClick={toggleVisibility}>hide</button>
                <br />
                {blog.author}
                <br />
                {blog.likes} 
                <br />
                {blog.url}
            </div>
        </div>
    )
}

export default Blog