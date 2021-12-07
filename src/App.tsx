import React from 'react';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';
import { PostList } from './components/PostList/PostList';
import { Post } from './types/types';
// import users from './api/users';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find((user) => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id) || [],
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
    Static list of posts
  </div>
);

export default App;
