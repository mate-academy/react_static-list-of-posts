import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPosts = posts.map(post => {
  const postUser = users.find(user => user.id === post.userId) || null;
  const postComments = comments.filter(coment => coment.postId === post.id);

  return {
    ...post,
    user: postUser,
    comments: postComments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList prepared={preparedPosts} />
  </div>
);

export default App;
