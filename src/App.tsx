import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function findUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function filterCommentById(postId: number): Comment[] {
  const filteredComment = commentsFromServer
    .filter(comment => comment.postId === postId);

  return filteredComment;
}

const postsInfo: Post[] = postsFromServer.map(post => ({
  ...post,
  user: findUserById(post.userId),
  comments: filterCommentById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsInfo} />
  </section>
);
