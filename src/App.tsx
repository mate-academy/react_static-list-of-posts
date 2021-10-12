import React from 'react';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="MainTitle">Static list of posts</h1>
    <PostList prepared={preparedPosts} />
  </div>
);

export default App;
