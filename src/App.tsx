import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function getUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentsByPostId(postId: number): Comment[] | null {
  const comments
    = commentsFromServer.filter(comment => comment.postId === postId);

  return comments || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
