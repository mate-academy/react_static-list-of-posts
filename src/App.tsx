import React from 'react';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import './App.scss';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => userId === user.id);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer.filter(comment => (
    postId === comment.postId
  ));

  return foundComments;
}

const posts: Post[] = postsFromServer.map(post => ({
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
