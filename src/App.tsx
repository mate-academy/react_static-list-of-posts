import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  const userInfo = users.find(user => user.id === post.userId) as User;
  const commentInfo = comments
    .filter(comment => post.id === comment.postId) as Comment[];

  return { ...post, user: userInfo, comments: commentInfo };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
