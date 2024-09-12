import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(postId: number): Comment[] {
  const foundComment = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return foundComment;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">List of posts</h1>

    <PostList posts={posts} />
  </section>
);
