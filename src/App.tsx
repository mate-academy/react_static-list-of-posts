import React from 'react';
import comments from './api/comments';

import posts from './api/posts';
import users from './api/users';

import './App.scss';
import { PostList } from './components/PostList/PostList';
import { PreparedPost } from './types';

const preparedPosts: PreparedPost[] = posts.map(post => {
  const user = users.find(u => u.id === post.userId) || null;
  const commentArray = comments.filter(comment => post.id === comment.postId);

  return { ...post, user, commentArray };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList data={preparedPosts} />
  </div>
);

export default App;
