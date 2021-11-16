import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

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
    <PostList posts={postList} />
  </div>
);

export default App;
