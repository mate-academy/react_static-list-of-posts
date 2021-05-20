import React from 'react';
import PostList from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => (
  {
    ...post,
    user: users.find(user => post.userId === user.id),
    comment: comments.filter(comment => post.id === comment.postId),
  }
));

const App = () => (
  <div className="App">
    <h1 className="App__header">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
