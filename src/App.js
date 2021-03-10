/* eslint-disable no-param-reassign */
import React from 'react';

import { PostsList } from './components/PostsList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getPreparedPosts = (rawPosts, comments, users) => rawPosts.map(post => ({
  ...post,
  user: users.find(user => post.userId === user.id),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const preparedPosts = getPreparedPosts(
  postsFromServer, commentsFromServer, usersFromServer,
);

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostsList posts={preparedPosts} />
  </div>
);

export default App;
