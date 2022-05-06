import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';

import posts from './api/posts';
import users from './api/users';
import comments from './api/comments';

const preparedPosts = posts.map((post) => (
  {
    ...post,
    users: users.find((currentUser) => (
      currentUser.id === post.userId
    )),
    comments: comments.filter((comment) => (
      comment.postId === post.id
    )),
  }));

export const App: React.FC = () => (
  <div className="app">
    <h1 className="app__title">
      Static list of posts
    </h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
