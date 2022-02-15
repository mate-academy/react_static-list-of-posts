import React from 'react';
import { PostList } from './components/PostList/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => {
  const postId = post.id;
  const postUser = users.find(user => user.id === post.userId) || null;
  const postComments = comments.filter(comment => comment.postId === postId);

  return {
    ...post,
    user: postUser,
    comments: postComments,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
