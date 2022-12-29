import React from 'react';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import './App.scss';
import { PostList } from './components/PostList';
import { Post } from './Types/post';

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: commentsFromServer
    .filter(comment => comment.postId === post.id),
  user: usersFromServer
    .find(user => user.id === post.userId)
    || {
      name: 'unknown',
      email: 'unknown',
    },
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
