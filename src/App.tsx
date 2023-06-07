import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { prepareApiData } from './apiPrepare';
import { PostList } from './components/PostList';

const fullPostData = prepareApiData({
  users: usersFromServer,
  posts: postsFromServer,
  comments: commentsFromServer,
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={fullPostData} />
  </section>
);
