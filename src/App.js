import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList/PostList';

const preperedPosts = (
  posts.map(post => ({
    ...post,
    user: users.find(user => post.userId === user.id),
    comments: comments.filter(comment => comment.postId === post.id),
  }))
);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostList posts={preperedPosts} />
  </div>
);

export default App;
