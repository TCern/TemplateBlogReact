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
                    <button className="deleteBtn" onClick={this.handleDelete}>Delete</button> 
                    <br></br>
                    <h3 style={{padding:0,margin:0}}>
                        {this.props.blog.title} 
                    </h3>
                    
                </div>
                <h4 style={{float:"right",marginRight:"1em",padding:0}}>
                    {this.props.blog.author}
                </h4>
                <br></br>
                <p className="headline">
                    {this.props.blog.headline}
                </p>
                <br></br>
                <Link to={"/posts/"+this.props.blog.id}>Read more</Link>
            </div>
        )
    }
}

const BlogPostSmall = connect(null, mapDispatchToProps)(BlogPostSmallClass);

export default BlogPostSmall;