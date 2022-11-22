import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { PostList } from './components/PostList';

import { User } from './types/user';
import { Post } from './types/post';
import { Comment } from './types/comment';

function getUserByID(userId: number): User | null {
  return usersFromServer.find(user => user.id === userId) || null;
}

function getCommmentsByPostID(postID: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === postID);
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserByID(post.userId),
  comments: getCommmentsByPostID(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
