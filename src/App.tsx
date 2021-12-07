import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { Post } from './types/Post';

const preparedPosts: Post[] = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter((comment) => post.id === comment.postId),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Your feed</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
