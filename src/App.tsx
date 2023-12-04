import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsByPostId(id: number): Comment[] | null {
  const foundComment = commentsFromServer
    .filter(comment => comment.postId === id);

  return foundComment || null;
}

export const posts: Post[] = postsFromServer.map(post => ({
  user: getUser(post.userId),
  comments: getCommentsByPostId(post.id),
  ...post,
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
