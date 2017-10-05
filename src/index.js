import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BaseLayout from './components/BaseLayout';
import CreatePost from './components/CreatePost';
import ShowPost from './components/ShowPost';
import PostList from './components/PostList';
import Home from './components/Home';



ReactDOM.render(
  <BrowserRouter>
  <BaseLayout>
  <App>
  <Switch>
      <Route exact path='/home' component={Home}/>
      <Route path='/createPost' component={CreatePost}/>
      <Route path='/postList/:id' component={ShowPost}/>
      <Route path='/postList'  component={PostList}/>
  </Switch>
  </App>
  </BaseLayout>
  </BrowserRouter>


, document.getElementById('root'));
registerServiceWorker();
