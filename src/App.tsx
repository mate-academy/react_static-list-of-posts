import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { UserType } from './types/UserType';
import { PostType } from './types/PostType';
import { CommentType } from './types/CommentType';
import { PostList } from './components/PostList';

function getUser(userId: number): UserType | null {
  const user = usersFromServer.find(item => item.id === userId);

  return user || null;
}

function getComment(postId: number): CommentType[] {
  return commentsFromServer.filter(item => item.postId === postId);
}

const posts: PostType[] = postsFromServer.map(item => ({
  ...item,
  user: getUser(item.userId),
  comment: getComment(item.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList post={posts} />
  </section>
);
