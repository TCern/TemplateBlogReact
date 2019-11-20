import React, { Component } from 'react';
import { connect } from "react-redux";
import BlogPost from '../components/BlogPost';

const mapStateToProps = state => {
    return { blogs: state.blogs };
};


class SinglePostClass extends Component {

    findBlogById(){
        for(var blog in this.props.blogs){
            if(this.props.blogs[blog].id === this.props.match.params.id){
                return this.props.blogs[blog];
            }
        }
        return null;
    }

    render(){
        return(
            <BlogPost blog={this.findBlogById()}></BlogPost>
        )
    }    
}

const SinglePost = connect(mapStateToProps)(SinglePostClass)

export default SinglePost