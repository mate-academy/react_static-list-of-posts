import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/user';
import { Comment } from './types/comment';
import { Posts } from './types/postsAll';

function getComment(id: number): Comment[] {
  const foundComment = commentsFromServer
    .filter(coment => coment.postId === id);

  return foundComment;
}

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

const postsList: Posts[] = postsFromServer.map(post => ({
  ...post,
  comment: getComment(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsList} />
  </section>
);
