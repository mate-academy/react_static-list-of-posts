import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedData = posts.map(item => (
  {
    ...item,

    user: users.find(user => user.id === item.userId),
    comment: comments.filter(comment => comment.postId === item.id),
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <p>
      <span>posts: </span>
      {posts.length}
    </p>

    <p>
      <span>comments: </span>
      {comments.length}
    </p>

    <p>
      <span>Users: </span>
      {users.length}
    </p>
    <PostList post={preparedData} />
  </div>
);

export default App;
