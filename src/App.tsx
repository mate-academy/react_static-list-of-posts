import React from 'react';
import 'bulma/css/bulma.min.css';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import { PostList } from './components/PostList/PostList';

const preparedPosts: PreparedPost[] = posts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id) || null,
  comments: comments.filter(comment => post.id === comment.postId),
}));

const App: React.FC = () => (
  <div className="column is-half ">
    <h1 className="title">Static list of posts:</h1>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
