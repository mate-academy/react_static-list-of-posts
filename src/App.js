/* eslint-disable arrow-parens */
import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import { User } from './components/User';
import { CommentList } from './components/CommentList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <h2>Posts :</h2>
    <PostList posts={posts} />

    <h2>Users :</h2>
    <ul className="list-container">
      {users.map((item) => (
        <li key={item.id} className="list-item">
          <User user={item} />
        </li>
      ))}
    </ul>

    <h2>CommentList :</h2>
    <CommentList comments={comments} />
  </div>
);

export default App;
