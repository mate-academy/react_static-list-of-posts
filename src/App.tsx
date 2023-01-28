import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { User } from './types/User';

import commentsFromServer from './api/comments';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find((user) => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer.filter(
    (comment) => comment.postId === postId,
  );

  return foundComments;
}

export const posts: Post[] = postsFromServer.map((post) => ({
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
