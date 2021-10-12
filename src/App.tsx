import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => {
  const user = users.find(({ id }) => id === post.id) || null;
  const postComments = comments.filter(({ postId }) => postId === post.id);

  return {
    ...post,
    user,
    comments: postComments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
