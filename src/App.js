import React from 'react';
import { PostList } from './PostList';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedList = posts.map((post) => {
  const author = users.find(user => user.id === post.userId);
  const filteredComments = comments
    .filter(comment => comment.postId === post.id);

  return {
    ...post,
    author,
    comments: filteredComments,
  };
});

const App = () => (
  <div className="App">
    <PostList preparedList={preparedList} />
  </div>
);

export default App;
