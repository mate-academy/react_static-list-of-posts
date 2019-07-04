import React from 'react';
import './App.css';

import PostList from './PostList'

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsData = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => post.id === comment.postId)
  };
});

const App = () => (
  <div className="App">
    <PostList post={postsData} />
  </div>
);

export default App;
