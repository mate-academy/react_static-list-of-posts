import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { PostList } from './components/PostList';

function getComments(id: number): Comment[] | null {
  const foundComment = commentsFromServer.filter(user => user.postId === id);

  return foundComment.length !== 0 ? foundComment : null;
}

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comment: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
