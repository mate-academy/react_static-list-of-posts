import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  author: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="App__text">Static list of posts</h1>

    <p className="App__text">
      <span>posts: </span>
      {posts.length}
    </p>

    <p className="App__text">
      <span>comments: </span>
      {comments.length}
    </p>

    <p className="App__text">
      <span>Users: </span>
      {users.length}
    </p>

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
