import React, { Component } from 'react';
import { addBlog } from '../actions/index';
import { connect } from 'react-redux';

function mapDispatchToProps(dispatch) {
    return {
      addBlog: blog => dispatch(addBlog(blog))
    };
  }

class WritePostClass extends Component {
    constructor(props){
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        var title = document.getElementById("title").value;
        var headline = document.getElementById("headline").value;
        var content = document.getElementById("content").value;
        var author = "A nice person";
        var blog = {
            id: "3",
            title : title,
            headline : headline,
            author : author,
            content : content,
        };
        this.props.addBlog(blog);
        console.log(blog);
    }

    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    Title:<input type="text" id="title"></input><br></br>
                    Headline:<input type="text" id="headline"></input><br></br>
                    Content:<textarea id="content"></textarea><br></br>
                    <input type="submit"></input>
                </form>
            </div>
        )
    }
}
const WritePost = connect(null, mapDispatchToProps)(WritePostClass);

export default WritePost