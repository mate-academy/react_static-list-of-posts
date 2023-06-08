import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { User } from './components/types/User';
import { Comment } from './components/types/Comment';
import { Post } from './components/types/Post';

const getUser = (userId: number): User | null => {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

const getComment = (postId: number): Comment[] => {
  return (commentsFromServer
    .filter(comment => postId === comment.postId));
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
