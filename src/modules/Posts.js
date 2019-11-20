import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import AllPosts from './AllPosts';
import SinglePost from './SinglePost';
class Posts extends Component {


    render(){
        return(
            <Switch>
                <Route exact path="/posts" component={AllPosts}></Route>
                <Route path="/posts/:id" component={SinglePost}></Route>
            </Switch>
        )
    }
}

export default Posts