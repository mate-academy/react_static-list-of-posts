import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';

const posts: Post[] = [];
const comments: Comment[] = commentsFromServer;
const users: User[] = usersFromServer;

function findUserById(usersToCheck: User[], id: number): User {
  const user = usersToCheck.find(u => u.id === id);

  if (!user) {
    throw new Error(`User ${id} not found`);
  }

  return user;
}

postsFromServer.map(postFromServer => {
  posts.push({
    user: findUserById(users, postFromServer.userId),
    id: postFromServer.id,
    title: postFromServer.title,
    body: postFromServer.body,
    comments: comments.filter(comment => comment.postId === postFromServer.id),
  });
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
