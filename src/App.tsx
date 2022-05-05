import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { Post } from './types/Post';

const preparedPosts: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
  comments: comments
    .filter(comment => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">Static list of posts</h1>
    <PostList props={preparedPosts} />
  </div>
);

export default App;
