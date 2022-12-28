import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

// eslint-disable-next-line
import { Post } from './types/types';
// eslint-disable-next-line
import { User } from './types/types';
// eslint-disable-next-line
import { Comment } from './types/types';

function getUserById(userId: number): User | null {
  const findUser = usersFromServer.find(user => user.id === userId);

  return findUser || null;
}

function getCommentsById(id: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === id);
}

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
