import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map((post) => ({
  ...post,
  user: users.find((user => user.id === post.userId)) || null,
  comment: comments.filter((comment => comment.postId === post.id)) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <PostList post={preparedPosts} />
  </div>
);

export default App;
