import React from 'react';

import './App.scss';
import { PostList } from './components/PostList/PostList';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(elem => (
  {
    ...elem,
    user: users.find(user => user.id === elem.userId),
    comment: comments.filter(comment => comment.postId === elem.id),
  }

));
const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
