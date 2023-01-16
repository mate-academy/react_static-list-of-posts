import React from 'react';

import './App.scss';
import './components/PostInfo/PostInfo.scss';
import './components/UserInfo/UserInfo.scss';
import './components/CommentList/CommentList.scss';

import postsFromServer from './api/posts';

import { PostList } from './components/PostList';

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postsFromServer={postsFromServer} />
  </section>
);
