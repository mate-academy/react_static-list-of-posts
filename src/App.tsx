import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PreparedPost } from './components/interface';

const preparedPosts: PreparedPost[] = posts.map((post) => ({
  ...post,
  autor: users.find((user) => user.id === post.userId) || null,
  postComments: comments.filter((comment) => comment.postId === post.id),
}));

const App: React.FC = () => (
  <PostList posts={preparedPosts} />
);

export default App;
