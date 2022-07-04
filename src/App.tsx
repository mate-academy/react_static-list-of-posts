import React from 'react';

import './App.scss';
import './reset.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

let currentUserIndex = 0;

const preparedPosts = posts.map((post) => {
  currentUserIndex = users[currentUserIndex].id === post.userId
    ? currentUserIndex
    : users.findIndex((user) => user.id === post.userId);

  const postComments = comments.filter((comment) => comment.postId === post.id);

  return {
    ...post,
    user: users[currentUserIndex] || null,
    comments: postComments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
