import React from 'react';

function BlogPost(blog){
    return (
        <div className="page">
            <h1 className="title">{blog.blog.title}</h1>
            <h2 style={{textAlign:"right",marginRight:"2%"}}>{blog.blog.author}</h2>
            <p className="blogBody">{blog.blog.content}</p>
        </div>
    );
}
export default BlogPost