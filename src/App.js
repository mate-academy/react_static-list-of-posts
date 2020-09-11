import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const postsData = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="info">Static list of posts</h1>

    <p className="info">
      <span>posts: </span>
      {posts.length}
    </p>

    <p className="info">
      <span>comments: </span>
      {comments.length}
    </p>

    <p className="info">
      <span>Users: </span>
      {users.length}
    </p>
    <PostList postsData={postsData} />
  </div>
);

export default App;
