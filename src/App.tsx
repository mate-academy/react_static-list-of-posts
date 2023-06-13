import React from 'react';

import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUser(userId: number): User {
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  return usersFromServer.find(user => user.id === userId)!;
}

function getComments(postId: number): Comment[] | null {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <PostList posts={posts} />
);
