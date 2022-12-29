import React from 'react';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(id: number): User | null {
  return usersFromServer.find(user => id === user.id) || null;
}

function getCommentsById(id: number): Comment[] {
  return commentsFromServer.filter(comment => id === comment.postId) || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getCommentsById(post.id),
  user: getUserById(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
