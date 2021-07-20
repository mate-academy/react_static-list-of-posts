import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsWithuser = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(coment => coment.postId === post.id),
}));

const App = () => (
  <PostList posts={postsWithuser} />
);

export default App;
