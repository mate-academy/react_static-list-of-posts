import React from 'react';
import PostList from './PostList/PostList';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPost = posts.map(post => (
  {
    ...post,
    user: users.find(person => post.userId === person.id),
    comments: comments.filter(comment => post.id === comment.postId),
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postlist={preparedPost} />
  </div>
);

export default App;
