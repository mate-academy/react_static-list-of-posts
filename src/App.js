import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const posts = postsFromServer.map(post => ({
  ...post,
  user: usersFromServer.find(user => (user.id === post.userId)),
  replies: commentsFromServer.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="title">Posts</h1>
    <PostList posts={posts} />
  </div>
);

export default App;
