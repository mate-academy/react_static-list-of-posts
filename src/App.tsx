import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

export const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find((user) => user.id === post.userId) || null,
  comments: comments.filter((comment) => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="page">
    <div className="page-content">
      <h1>Static list of posts</h1>
      <PostList posts={preparedPosts} />
    </div>
  </div>
);

export default App;
