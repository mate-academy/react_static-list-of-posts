import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import { Comment } from './types/comments';
import { Post } from './types/posts';
import { User } from './types/users';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getComments(postId: number): Comment[] | null {
  const commentFind = commentsFromServer.filter(message => (
    message.postId === postId
  ));

  return commentFind.length > 0
    ? commentFind
    : null;
}

function getUser(userId: number): User | null {
  const postUser = usersFromServer.find(person => (
    person.id === userId
  ));

  return postUser || null;
}

const post: Post[] = postsFromServer.map(poost => ({
  ...poost,
  comments: getComments(poost.id),
  user: getUser(poost.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={post} />
  </section>
);
