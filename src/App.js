import React from 'react';

import './App.css';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postArr = posts.map(post => (
  {
    ...post,
    user: users.find(person => post.userId === person.id),
    comments: comments.filter(comment => post.id === comment.postId),
  }
));

const App = () => (
  <div className="App">
    <h1 className="heading">Static list of posts</h1>
    <PostList postList={postArr} />
  </div>
);

export default App;
