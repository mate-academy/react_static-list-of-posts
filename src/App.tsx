import React from 'react';
import { Post } from './components/types/Post';
import { User } from './components/types/User';
import { Comment } from './components/types/Comment';

import './App.scss';
import { PostList } from './components/PostList/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(postId: number): Comment[] {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comment: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
