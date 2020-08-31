import React from 'react';
import './App.css';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

const prepearedPosts = posts.map(post => ({
  ...post,
  user: users[post.userId - 1],
  comments: comments.filter(el => el.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={prepearedPosts} />
  </div>
);

export default App;
