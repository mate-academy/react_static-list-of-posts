import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList/PostList';

const getAllData = (posts, comments, users) => (
  posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }))
)

const App = () => {
  const preparedPosts = getAllData(posts, comments, users);

  return <PostList posts={preparedPosts} />;
};

export default App;
