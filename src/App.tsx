import React from 'react';
import Posts from './views/posts';
import Post from './views/post';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Posts}  exact />
        <Route path='/post' component={Post} exact />
      </Switch>
  </BrowserRouter>
  );
}

export default App;
