import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

function findUser(userId: number): User | null {
  const result = usersFromServer.find((user) => user.id === userId);

  return result || null;
}

function findComments(id: number): Comment[] {
  const result = commentsFromServer.filter(comment => id === comment.postId);

  return result;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: findUser(post.userId),
  comments: findComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
