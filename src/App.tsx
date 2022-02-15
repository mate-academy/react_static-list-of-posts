import React from 'react';

import './App.scss';

import posts from './api/posts';
import commentsList from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const defaultUser = {
  name: 'unknown',
  email: 'unknown',
};

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || defaultUser,
  comments: commentsList.filter(comment => post.id === comment.postId),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="mainTitle">Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
