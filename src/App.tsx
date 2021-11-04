import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => {
  const userLink = users.find(user => user.id === post.userId) || null;
  const commentLink = comments.filter(comment => comment.postId === post.id) || null;

  return { ...post, userLink, commentLink };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
