import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const PrepearedProps = posts.map(post => ({
  ...post,
  comment: comments.filter(comment => post.id === comment.postId),
  user: users.find(user => post.userId === user.id),
}));

const App = () => (
  <div className="App">
    <h1 className="App-title">Static list of posts</h1>
    <PostList arrOfObj={PrepearedProps} />
  </div>
);

export default App;
