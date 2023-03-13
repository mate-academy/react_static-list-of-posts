import React from 'react';
import './App.scss';
import { Users } from './types/Users';
import { Comments } from './types/Comments';
import { Posts } from './types/Posts';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

function getUserById(userId: number): Users | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsById(postId: number): Comments[] {
  const foundComments = commentsFromServer
    .filter(comment => comment.postId === postId);

  return foundComments;
}

export const posts: Posts[] = postsFromServer.map(post => ({
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
