import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList/PostList';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

function getUserById(userId: number): User | null {
  const findUser = usersFromServer
    .find(user => user.id === userId || null);

  return findUser || null;
}

function getCommentByPostId(postId: number): Comment[] | [] {
  const findComment = commentsFromServer
    .filter(comment => comment.postId === postId);

  return findComment || [];
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
