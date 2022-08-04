import React from 'react';
import { Posts } from './types/Posts';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const posts: Posts[] = postsFromServer
  .map(post => ({
    ...post,
    user: usersFromServer.find(user => post.userId === user.id) || null,
    comments: commentsFromServer.filter(comment => post.id === comment.postId),
  }));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
