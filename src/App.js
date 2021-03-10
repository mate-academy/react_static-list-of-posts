import React from 'react';

import './App.scss';

import { posts } from './api/posts';
import { comments } from './api/comments';
import { users } from './api/users';
import PostList from './Components/PostList';

const postList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList
      postList={postList}
      comments={comments}
    />
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
  </div>
);

export default App;
