import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { User } from './types/User';
import { PostList } from './components/PostList';

function getCommentsById(postId: number): Comment[] {
  return commentsFromServer.filter(comment => postId === comment.postId);
}

function getUserById(userId: number): User | null {
  const user = usersFromServer
    .find(currentUser => currentUser.id === userId);

  return user || null;
}

const posts: Post[] = postsFromServer.map(post => ({
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
