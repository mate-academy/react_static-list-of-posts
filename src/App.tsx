import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PreparedPost } from './react-app-env';

const preparedPosts: PreparedPost[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(coment => coment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </div>
);

export default App;
