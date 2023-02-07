import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(id: number): Comment[] | [] {
  return commentsFromServer.filter(comment => comment.postId === id);
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
