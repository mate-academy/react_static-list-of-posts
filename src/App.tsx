import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { preparePosts } from './Utils/helpers';

const fullPosts = preparePosts({
  users: usersFromServer,
  posts: postsFromServer,
  comments: commentsFromServer,
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={fullPosts} />
  </section>
);
