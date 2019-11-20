import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Contact from '../modules/Contact';
import Home from '../modules/Home';
import NotFound from '../modules/NotFound';
import Posts from '../modules/Posts';
import WritePost from '../modules/WritePost';
function Body() {
    return (
      <main className="center">
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/contact' component={Contact}/>
          <Route path='/posts' component={Posts}/>
          <Route path='/write' component={WritePost}/>
          <Route component={NotFound} />
        </Switch>
      </main>
    );
}
export default Body;