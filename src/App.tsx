import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  const author = users
    .find(userOfUsers => userOfUsers.id === post.userId) || null;
  const postComments = comments
    .filter(comment => post.id === comment.postId);

  return { ...post, author, postComments };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
