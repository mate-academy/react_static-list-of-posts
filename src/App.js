import React from 'react';
import { PostList } from './Components/PostList/PostList';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const combinedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.userId),
})).slice(0, 15);

const App = () => (
  <div className="app">
    <h1 className="app__heading">Static list of posts</h1>
    <PostList posts={combinedPosts} />
  </div>
);

export default App;
