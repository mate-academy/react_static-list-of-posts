import React from 'react';

import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Posts } from './types/Posts';
import { Comments } from './types/Comments';
import { Users } from './types/Users';

function getUserById(userId: number): Users | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsByPostId(postId: number): Comments[] {
  const foundComment = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComment;
}

export const posts: Posts[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
