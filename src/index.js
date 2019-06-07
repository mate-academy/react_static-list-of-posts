import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import posts from './posts';
import users from './users';
import comments from './comments';
import './index.css';

ReactDOM.render(
  <App
    posts={posts}
    users={users}
    comments={comments}
  />, document.getElementById('root'));
