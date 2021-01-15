import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="app">
    <h1 className="app__text">Static list of posts</h1>

    <p className="app__text">
      <span>posts: </span>
      {posts.length}
    </p>

    <p className="app__text">
      <span>comments: </span>
      {comments.length}
    </p>

    <p className="app__text">
      <span>Users: </span>
      {users.length}
    </p>

    <div>
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
