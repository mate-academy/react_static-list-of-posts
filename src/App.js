import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const fullPosts = posts.map((post) => {
  const foundComments = comments.filter(comment => comment.postId === post.id);
  const foundUser = users.find(user => user.id === post.userId);

  return {
    ...post,
    comments: foundComments,
    user: foundUser,
  };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={fullPosts} />
  </div>
);

export default App;
