import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUser(userId:number): User | null {
  const foundUser = usersFromServer.find(user => userId === user.id);

  return foundUser || null;
}

function getComments(id:number): Comment[] {
  const foundComments = commentsFromServer
    .filter(comment => id === comment.postId);

  return foundComments || null;
}

const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
