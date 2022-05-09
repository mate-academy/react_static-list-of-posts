import React from 'react';
import './App.scss';

import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  const user = users.find(userItem => userItem.id === post.userId);

  const postComments = comments
    .filter(commentItem => commentItem.postId === post.id);

  const postNew = {
    ...post,
    user: user || {
      name: '',
      email: '',
    },
    postComments,
  };

  return postNew;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
