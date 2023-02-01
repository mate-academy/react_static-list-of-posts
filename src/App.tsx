import React from 'react';

import './App.scss';

import './components/CommentList/CommentList.scss';
import './components/PostInfo/PostInfo.scss';
import './components/UserInfo/UserInfo.scss';

import { CommentType } from './types/CommentType';
import { UserType } from './types/UserType';
import { PostType } from './types/PostType';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

function getUser(userId: number): UserType | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): CommentType[] {
  const foundComments = (
    commentsFromServer.filter(comm => comm.postId === postId)
  );

  return foundComments;
}

export const posts: PostType[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
