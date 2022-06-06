import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';
import { PreparedPosts } from './types';

const preparedPosts: PreparedPosts[] = posts.map(post => {
  return {
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
