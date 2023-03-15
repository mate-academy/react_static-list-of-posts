import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import { PostList } from './components/PostList';
// import commentsFromServer from './api/comments';
// import usersFromServer from './api/users';

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={postsFromServer}
    />
  </section>
);
