import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import PostList from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comment: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="app-title">Static list of posts</h1>
    <div>
      <PostList postList={postList} />
    </div>
  </div>
);

export default App;
