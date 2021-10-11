import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './type/Post';
import { PostList } from './Components/PostList/PostList';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(({ id }) => post.userId === id) || null,
  comments: comments.filter(({ postId }) => post.id === postId),
}));

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
