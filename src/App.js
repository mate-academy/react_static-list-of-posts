import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postObject = posts.map(post => (
  {
    ...post,
    user: users.find(user => post.userId === user.id),
    commentsList: comments.filter(comment => post.id === comment.postId),
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postsList={postObject} />
  </div>
);

export default App;
