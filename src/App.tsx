import React from 'react';

import './App.scss';
import { User } from './types/users';
import { Comments } from './types/comments';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { Posts } from './types/posts';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}

function getComments(id: number): Comments[] | null {
  const foundComment = commentsFromServer
    .filter(comment => comment.postId === id);

  // if there is no comment with a given postid
  return foundComment || null;
}

const users = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
}));
const posts: Posts[] = users.map(post => ({
  ...post,
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
