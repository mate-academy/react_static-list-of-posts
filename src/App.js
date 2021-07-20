import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const newPosts = posts.map(
  post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }),
);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={newPosts} />
  </div>
);

export default App;
