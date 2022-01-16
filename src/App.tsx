import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { Post } from './types/Post';
import { PostList } from './components/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comments,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>

    <PostList posts={preparedPosts} />

  </div>
);

export default App;
