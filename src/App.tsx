import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';
import { User } from './types/user';
import { Post } from './types/post';
import { Comment } from './types/comment';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(id: number): Comment[] | null {
  const foundComment = commentsFromServer.filter(comment => (
    comment.postId === id));

  return foundComment || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
