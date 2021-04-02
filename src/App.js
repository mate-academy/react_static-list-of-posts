import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList';

const postInfo = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

export const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postInfo} />
  </div>
);
