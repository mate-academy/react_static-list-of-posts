import React from 'react';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User, Comment, Post } from './types/Types';
import { PostList } from './components/PostList';

import './App.scss';

const getUser = (userId: number): User | null => (
  usersFromServer.find(user => (user.id === userId)) || null
);

const getComment = (postId: number): Comment[] => (
  commentsFromServer.filter(comment => comment.postId === postId)
);

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
