import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const postsList = posts.map(post => (
  {
    ...post,
    user: users.find(user => post.userId === user.id),
    comments: comments.filter(comment => post.id === comment.postId),
  }
));

const App = () => (
  <div className="App">
    <PostList posts={postsList} />
  </div>
);

export default App;
