import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';
import { PostPrepared } from './types/postsPrepared';

function findUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function findCommentById(postId: number): Comment[] | null {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments || null;
}

export const postsPrepared: PostPrepared[] = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: findCommentById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={postsPrepared} />
    </div>
  </section>
);
