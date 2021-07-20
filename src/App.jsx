import React from 'react';

import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import commentsFromServer from './api/comments';
import users from './api/users';

const preparedPosts = posts.map((post) => {
  const foundUser = users
    .find(user => user.id === post.userId);

  const comments = commentsFromServer
    .filter(comment => comment.postId === post.id);

  return {
    ...post,
    user: foundUser,
    comments,
  };
});

const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
