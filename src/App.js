import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
  user: users.find(user => post.userId === user.id),
}));

const App = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
