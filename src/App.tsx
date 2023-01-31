import React from 'react';

import './App.scss';

import { User } from './types/User';
import { Comment } from './types/Comment';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

type FoundUser = User | null;

const findUserById = (users: User[], id: number): FoundUser => (
  users.find((user) => id === user.id) || null
);

const getFilteredCommentsById = (comments: Comment[], id: number) => (
  comments.filter(({ postId }) => postId === id)
);

const posts = postsFromServer.map((post) => {
  const { userId, id: postId } = post;

  return {
    ...post,
    user: findUserById(usersFromServer, userId),
    comments: getFilteredCommentsById(commentsFromServer, postId),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
