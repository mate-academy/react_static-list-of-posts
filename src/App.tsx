import React from 'react';
import './App.scss';
import { IPreparedPost } from './types/Types';
import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts: IPreparedPost[] = posts.map(post => {
  return {
    ...post,
    user: users.find(user => post.userId === user.id) || null,
    comments: comments.filter(comment => post.id === comment.postId) || null,
  };
});

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
