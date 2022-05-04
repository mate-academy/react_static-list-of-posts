import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

export const readyPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comment: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={readyPosts} />
  </div>
);

export default App;
