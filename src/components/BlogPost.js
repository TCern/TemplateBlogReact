import React from 'react';

function BlogPost(blog){
    return (
        <div>
            <h1 style={{textAlign:"center"}}>{blog.blog.title}</h1>
            <h2 style={{textAlign:"right",marginRight:"2%"}}>{blog.blog.author}</h2>
            <p style={{marginTop:"10%"}}>{blog.blog.content}</p>
        </div>
    );
}
export default BlogPost