import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

import { Post } from './types/Post';

const preparedPosts: Post[] = posts.map((post) => {
  return {
    ...post,
    user: users.find((user) => user.id === post.userId) || null,
    comments: comments.filter((comment) => post.id === comment.postId),
  };
});

const App: React.FC = () => (
  <div className="App">
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
