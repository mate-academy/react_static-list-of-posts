import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const preparedPostList = posts.map(
  post => Object.assign(
    post,
    { user: users.find(u => u.id === post.userId) },
    { commentList: comments.filter(c => c.postId === post.id) },
  ),
);

const App = () => (
  <div className="App">
    <PostList postList={preparedPostList} />
  </div>
);

export default App;
