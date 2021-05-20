import React from 'react';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import PostList from './components/PostList/PostList';

const Posts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comment: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <PostList list={Posts} />
  </div>
);

export default App;
