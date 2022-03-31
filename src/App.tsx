import React from 'react';
import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './types/PostTypes';

const preparedPosts: Post[] = posts.map((post) => {
  const copy = {
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id) || null,
  };

  return copy;
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList listPosts={preparedPosts} />
  </div>
);

export default App;
