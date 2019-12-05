import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './PostList';

const App = () => (
  <div className="App">
    <h1 className="maintitle">
      Static list of posts
    </h1>
    <PostList posts={getPostsWithUsers} />
  </div>
);

const getPostsWithUsers = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => comment.postId === post.id),
}));

export default App;
