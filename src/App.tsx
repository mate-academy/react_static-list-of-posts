import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUserByID(userId: number): User | null {
  const foundUser = usersFromServer.find((user) => user.id === userId);

  return foundUser || null;
}

function getCommentsByID(postId: number): Comment[] | null {
  const filtered = [...commentsFromServer].filter(
    (comment) => comment.postId === postId,
  );

  return filtered.length > 0 ? filtered : null;
}

export const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserByID(post.userId),
  comments: getCommentsByID(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
