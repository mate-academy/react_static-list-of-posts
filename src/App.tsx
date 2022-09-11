import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { Comment } from './components/types/Comment';
import { Post } from './components/types/Post';
import { User } from './components/types/User';

function getComment(postId: number): Comment[] {
  return commentsFromServer
    .filter(comment => (comment.postId === postId));
}

function getUser(userId: number): User | null {
  return usersFromServer
    .find(person => person.id === userId)
    || null;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComment(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
