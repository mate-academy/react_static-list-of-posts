import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { PreparedPost } from './types/PreparedPost';

import { PostList } from './components/PostList';

function getUserById(userId: number): User | undefined {
  return usersFromServer
    .find(author => author.id === userId) || undefined;
}

function getCommentsById(postId: number): Comment[] {
  return commentsFromServer
    .filter(comment => comment.postId === postId);
}

export const posts: PreparedPost[] = postsFromServer
  .map(post => {
    const user = getUserById(post.userId);
    const comments = getCommentsById(post.id);

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
