import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PostList } from './components/PostList';
import { User } from './types/User';

function getUserById(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommentByPostId(postId: number): Comment[] {
  const foundComment = commentsFromServer.filter(comment => (
    comment.postId === postId));

  return foundComment;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getCommentByPostId(post.id),
  user: getUserById(post.userId) || null,
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
