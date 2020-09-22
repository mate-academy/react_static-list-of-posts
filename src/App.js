import React from 'react';
import { PostList } from './Components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const allData = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

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
    <PostList allDataProp={allData} />
  </div>
);

export default App;
