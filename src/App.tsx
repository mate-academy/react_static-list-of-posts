import React from 'react';

import './App.scss';

import users from './api/users';
import comments from './api/comments';
import posts from './api/posts';

import { PostList } from './components/PostList';
import { Post } from './types';

const preparedPosts: Post[] = posts.map((post) => {
  return {
    ...post, // old properties
    user: users.find(user => user.id === post.userId) || null, // + user or null
    comments: comments.filter(comment => post.id === comment.postId), // + user or null
  };
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
