import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(person => person.id === post.userId),
  comments: comments.filter(comment => post.id === comment.postId),
}));

const App = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
