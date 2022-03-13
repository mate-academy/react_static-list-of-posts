import React from 'react';
import comments from './api/comments';
import posts from './api/posts';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

import './App.scss';

const preparedPosts = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comment: comments.filter(comment => post.id === comment.postId) || null,
}));

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList
      posts={preparedPosts}
    />
  </div>
);

export default App;
