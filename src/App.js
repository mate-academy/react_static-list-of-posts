import React from 'react';
import './App.css';
import { PostList } from './components/PostList/PostList';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPost = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postObj={preparedPost} />
  </div>
);

export default App;
