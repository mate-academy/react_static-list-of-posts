import React from 'react';
import { PostList } from './components/PostList/PostList';

import './reset.scss';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(pablication => post.id === pablication.postId),
}));

// eslint-disable-next-line no-console
console.log(postList);

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

    <PostList pablications={postList} />
  </div>

);

export default App;
