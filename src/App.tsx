import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { Post } from './types/Post';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer
    .find(user => user.id === userId);

  return foundUser || null;
}

function getComment(postId: number): Comment[] {
  const foundComment = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComment;
}

export const posts: Post[] = postsFromServer
  .map(post => ({
    ...post,
    user: getUser(post.userId),
    comments: getComment(post.id),
  }));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
