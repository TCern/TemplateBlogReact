import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteBlog } from '../actions/index';

function mapDispatchToProps(dispatch) {
    return {
        deleteBlog: blog => dispatch(deleteBlog(blog))
    };
}

class BlogPostSmallClass extends Component {
    constructor(props){
        super(props);

        this.handleDelete = this.handleDelete.bind(this);
    }
    handleDelete(){
        this.props.deleteBlog(this.props.blog.id);
    }
    render(){
        return(
            <div className="blogPostSmall">
                <div>
                    <button style={{float:"right"}} onClick={this.handleDelete}>Delete</button> 
                    <br></br>
                    Title: {this.props.blog.title} </div>
                Author: {this.props.blog.author}
                <br></br>
                {this.props.blog.headline}<br></br>
                <Link to={"/posts/"+this.props.blog.id}>Read more</Link>
            </div>
        )
    }
}

const BlogPostSmall = connect(null, mapDispatchToProps)(BlogPostSmallClass);

export default BlogPostSmall;