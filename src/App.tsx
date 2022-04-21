import React from 'react';

import './App.scss';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

import { PostList } from './components/PostList/PostList';

const preparedPosts = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
