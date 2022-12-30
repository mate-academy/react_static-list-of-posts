import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './Types/users';
import { Post } from './Types/posts';
import { Comment } from './Types/comments';
import { PostList } from './components/PostList';

const getUser = (userId: number): User | null => {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

const getComment = (postId: number): Comment[] | null => {
  const foundCommment = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundCommment || null;
};

export const posts: Post[] = postsFromServer.map(post => ({
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
