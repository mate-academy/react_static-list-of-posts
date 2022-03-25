import React from 'react';

import './App.scss';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: PreparedPost[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || null,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
