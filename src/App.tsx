import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(id: number): User | null {
  return usersFromServer.find(user => user.id === id) || null;
}

function getCommentsByPostId(id: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === id);
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
