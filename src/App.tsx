import React from 'react';
import { Post } from './types/post';
import { User } from './types/user';
import { Comment } from './types/comment';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getUserById = (userId: number): User | undefined => {
  return usersFromServer.find(user => user.id === userId);
};

const getCommentsById = (postId: number): Comment[] => {
  return commentsFromServer.filter(comment => comment.postId === postId);
};

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
