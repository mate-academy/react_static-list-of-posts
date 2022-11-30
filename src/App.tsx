import React from 'react';

import './App.scss';
import { User } from './components/types/Users';
import { Comments } from './components/types/Comments';
import { Posts } from './components/types/Posts';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

function getUsers(usersId: number): User | undefined {
  const findUser = usersFromServer.find(
    user => user.id === usersId,
  );

  return findUser;
}

function getComments(idPost: number): Comments[] {
  const findComments = commentsFromServer.filter(
    comment => comment.postId === idPost,
  );

  return findComments;
}

const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUsers(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
