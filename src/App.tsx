import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comment: comments.filter(comment => comment.postId === post.id) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
