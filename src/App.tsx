import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { NewPosts } from './types/Types';

const preparedPosts: NewPosts[] = posts.map(post => (
  {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comment: comments.find(comment => comment.postId === post.id) || null,
  }
));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <div>{preparedPosts[0].title}</div>
  </div>
);

export default App;
