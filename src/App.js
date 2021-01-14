import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

const preparedPosts = postsFromServer
  .map(post => (
    {
      ...post,
      user: usersFromServer.find(user => post.userId === user.id),
      comment: commentsFromServer.filter(comment => post.id === comment.postId),
    }));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <p>
      <span>posts: </span>
      {postsFromServer.length}
    </p>
    <p>
      <span>comments: </span>
      {commentsFromServer.length}
    </p>
    <p>
      <span>Users: </span>
      {usersFromServer.length}
    </p>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
