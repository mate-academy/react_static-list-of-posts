import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

// import { PostWithComments } from './components/PostInfo/PostInfo';

import postsFromServer from './api/posts';
// import commentsFromServer from './api/comments';
// import usersFromServer from './api/users';

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList allPosts={postsFromServer} />
  </section>
);
