import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => post.id === comment.postId),
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
