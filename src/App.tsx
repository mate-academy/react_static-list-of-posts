import React from 'react';

import './App.scss';
import { InfoBlock } from './type/types';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const preparePosts: InfoBlock[] = postsFromServer.map((post) => ({
  ...post,
  comments: commentsFromServer.filter((comment) => (
    comment.postId === post.id
  )),
  user: usersFromServer.find((user) => (
    user.id === post.userId
  )) || null,
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList infoBlocks={preparePosts} />
  </section>
);
