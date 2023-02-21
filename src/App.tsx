import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(postId: number): Comment | null {
  const foundComment = commentsFromServer.find(comm => comm.postId === postId);

  return foundComment || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comment: getComment(post.id),
}));

export const App: React.FC = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </div>
);
