import React from 'react';
import './App.scss';
import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const defaultUser = {
  name: 'unknown',
  email: 'unknown',
};

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId) || defaultUser,
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList postList={preparedPosts} />
  </div>
);

export default App;
