import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(item => item.id === post.userId),
  preparedComments: comments.filter(item => item.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="page-title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
