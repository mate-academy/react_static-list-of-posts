import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './api/components/PostList';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comments: comments.filter(comment => post.id === comment.postId),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
