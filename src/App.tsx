import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PreparedPost } from './types/types';
import { PostList } from './components/PostList/PostList';

const preparedPosts: PreparedPost[] = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <div className="App">
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
