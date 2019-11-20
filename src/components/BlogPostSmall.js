import React from 'react';
import { Link } from 'react-router-dom'

function BlogPostSmall(blog){
    console.log(blog.blog);
    return(
        <div className="blogPostSmall">
            Title: {blog.blog.title} <br></br>
            Author: {blog.blog.author} <br></br>
            <br></br>
            {blog.blog.headline}<br></br>
            <Link to={"/posts/"+blog.blog.id}>Read more</Link>
        </div>
    )
}
export default BlogPostSmall;