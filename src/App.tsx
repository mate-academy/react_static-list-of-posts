import React from 'react';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { PostList } from './components/PostList/PostList';
import { Post } from './types/types';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(({ id }) => id === post.userId) || null,
  comments: comments.filter(({ postId }) => postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
