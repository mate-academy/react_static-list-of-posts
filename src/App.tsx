import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Posts } from './types/Posts';
import { Users } from './types/Users';
import { Comment } from './types/Comment';

function getUser(userId: number): Users | null {
  const foundUser = usersFromServer.find(user => user.id
    === userId);

  return foundUser || null;
}

function getComment(postId: number): Comment[] {
  const foundComment = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return foundComment;
}

export const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">List of posts</h1>

    <PostList posts={posts} />
  </section>
);
