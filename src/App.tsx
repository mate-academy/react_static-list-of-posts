import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  return usersFromServer.find(user => userId === user.id) || null;
}

function getComments(postId: number): Comment[] {
  return commentsFromServer.filter(comment => postId === comment.postId);
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
