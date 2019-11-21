import React, { Component } from 'react';
import { connect } from "react-redux";
import BlogPostSmall from '../components/BlogPostSmall';

const mapStateToProps = state => {
    return { blogs: state.blogs };
};

class AllPostsClass extends Component {
    convertBlogsToComponents(){
        return this.props.blogs.map((blog, i) => <BlogPostSmall blog={blog} key={i}></BlogPostSmall>)
    }

    render(){
        return(
            <div>
                <h1 className="title">My Posts</h1>
                {this.convertBlogsToComponents()}
            </div>
        )
    }
}

const AllPosts = connect(mapStateToProps)(AllPostsClass)

export default AllPosts