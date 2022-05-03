import React from 'react';

import { Post } from './types/Post';

import { PostList } from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import './App.scss';

const preparedPosts: Post[] = posts.map((post) => ({
  ...post,
  user: users.find((user) => user.id === post.id),
  comments: comments.filter((comment) => comment.postId === post.id),
}));

const App: React.FC = () => (
  <div className="app">
    <h1 className="appTitle">Static list of posts</h1>
    <PostList
      preparedPosts={preparedPosts}
    />
  </div>
);

export default App;
