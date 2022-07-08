import React from 'react';

import './App.scss';

// eslint-disable-next-line import/no-named-as-default
import PostList from './components/PostList/PostList';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post } from './Types/Post';

const preparedPost: Post[] = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comment: comments.filter(comment => post.id === comment.postId),
}));

const App: React.FC = () => (
  <div className="app">
    <h1 className="app__h1">Static list of posts</h1>
    <PostList posts={preparedPost} />
  </div>
);

export default App;
