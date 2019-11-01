import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './component/postList/PostList';

function getPostsWithComments() {
  return posts.map(post => ({
    ...post,
    user: users.find(item => item.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

function App() {
  return (
    <PostList posts={getPostsWithComments()} />
  );
}

export default App;
