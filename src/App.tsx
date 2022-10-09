import React from 'react';

import './App.scss';

import { CommentTypes, UserTypes, PostTypes } from './types';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const getComments = (id: number) => (commentsFromServer
  .filter((comment: CommentTypes) => comment.postId === id)
);

const getUser = (userId: number) => (usersFromServer
  .find((user: UserTypes) => user.id === userId)
);

const posts = postsFromServer.map((post: PostTypes) => {
  return (
    {
      ...post,
      comments: getComments(post.id),
      user: getUser(post.userId) || {},
    });
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
