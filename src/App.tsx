import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './Types/Post';
import { User } from './Types/User';
import { Comment } from './Types/Comment';
import { PostList } from './components/PostList';

const getUserById = (userId: number): User | null => (
  usersFromServer.find(user => (
    userId === user.id
  )) || null
);

const getCommentsById = (postId: number): Comment[] => (
  commentsFromServer.filter(commet => (
    commet.postId === postId
  ))
);

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comment: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
