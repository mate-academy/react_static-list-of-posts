import React from 'react';
import { PostList } from './components/PostList/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postsList = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <PostList posts={postsList} />
  </div>
);

export default App;
