import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  const findComments = comments.filter(({ postId }) => (postId === post.id));
  const findUser = users.find(({ id }) => post.userId === id) || null;

  return {
    ...post,
    comments: findComments,
    user: findUser,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
