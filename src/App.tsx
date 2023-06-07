import React from 'react';

import 'bulma';
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
  <section className="App container">
    <h1 className="App__title title has-text-centered">
      Static list of posts
    </h1>
    <PostList posts={fullPostData} />
  </section>
);
