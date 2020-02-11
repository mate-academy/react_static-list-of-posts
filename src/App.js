import React from 'react';
import PostList from './PostList';
import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsWithUsersAndComments = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={postsWithUsersAndComments} />
  </div>
);

export default App;
