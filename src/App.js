import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  author: users.find(user => user.id === post.userId),
  postComments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="app">
    <h1 className="app__header">Static list of posts</h1>

    <p className="app__statistic">
      <span>Posts: </span>
      {posts.length}
    </p>

    <p className="app__statistic">
      <span>Comments: </span>
      {comments.length}
    </p>

    <p className="app__statistic">
      <span>Users: </span>
      {users.length}
    </p>

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
