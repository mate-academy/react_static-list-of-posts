import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const preparedPosts = posts.map((post) => {
  const { userId, id } = post;
  const postComments = comments.filter(({ postId }) => postId === id);
  const postUser = users.find(user => user.id === userId);

  return {
    ...post,
    comments: postComments,
    user: postUser,
  };
});

const App = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
