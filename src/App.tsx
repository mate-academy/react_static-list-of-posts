import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post, User, Comment } from './types/index';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getComments(postId: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === postId);
}

const posts: Post[] = postsFromServer.map(post => ({
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
