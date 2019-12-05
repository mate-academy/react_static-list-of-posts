import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

const preparedPosts = posts.map((post) => {
  const user = users.find(item => item.id === post.userId);
  const commentsList = comments.filter(comment => comment.postId === post.id);

  return { ...post, user, commentsList };
});

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
