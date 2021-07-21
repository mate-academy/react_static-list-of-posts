import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedData = posts.map((post) => {
  const copyPost = {
    ...post,
    author: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  };

  return copyPost;
});

const App = () => (
  <div className="App">
    <PostList posts={preparedData} />
  </div>
);

export default App;
