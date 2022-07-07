import React from 'react';
import { PostList } from './components/PostList/PostList';

import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';

import './App.scss';

export const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comment: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div className="App__list">
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
