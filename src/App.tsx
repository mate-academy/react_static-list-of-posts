import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './components/types/post';
import { User } from './components/types/user';
import { Comment } from './components/types/comment';

const getUserById = (userId: number): User | null => (
  usersFromServer.find((user) => (
    user.id === userId
  )) || null
);

const getCommentsById = (postId: number): Comment[] => (
  commentsFromServer.filter((comment) => (
    comment.postId === postId
  ))
);

const posts: Post[] = postsFromServer.map((post) => ({
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
