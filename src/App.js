import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './Components/PostList';

const postList = posts.map(post => ({
  ...post,
  user: users.find(user => (
    user.id === post.userId
  )),
  comments: comments.filter(comment => (
    comment.postId === post.id
  )),
}));

const App = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList posts={postList} />
  </div>
);

export default App;
