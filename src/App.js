import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map((post) => {
  const preparedPost = {
    ...post,
    user: users.filter(({ id }) => id === post.userId)[0],
    comments: comments.filter(({ postId }) => postId === post.id),
  };

  return preparedPost;
});

const App = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
