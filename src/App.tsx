import React from 'react';

import './App.scss';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const necessaryUser = usersFromServer.find(user => user.id === userId);

  return necessaryUser || null;
}

function getComments(postId: number): Comment[] {
  const necessaryComments = commentsFromServer.filter(comment => {
    return comment.postId === postId;
  });

  return necessaryComments;
}

export const posts: Post[] = postsFromServer.map(post => ({
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
