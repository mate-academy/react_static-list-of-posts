import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

const getUserById = (userId: number): User | null => (
  usersFromServer.find(user => user.id === userId) || null
);

const getCommentsByPostId = (postId: number): Comment[] => (
  commentsFromServer.filter(comment => (comment.postId === postId))
);

const posts: Post[] = postsFromServer.map(post => {
  const user = getUserById(post.userId);
  const comments = getCommentsByPostId(post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
