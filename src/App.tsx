import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Posts } from './types/Posts';
import { User } from './types/User';

function getUser(id: number): User | null {
  const foundUser = usersFromServer.find((user) => user.id === id);

  return foundUser || null;
}

function getComment(id: number) {
  const filteredComment = commentsFromServer.filter(
    (comment) => comment.postId === id,
  );

  return filteredComment;
}

export const preparedPosts: Posts[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
