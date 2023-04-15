import React from 'react';

import './App.scss';
import { PreparedPost } from './types/PreparedPost';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUserById(userId: number): User | null {
  const userName = usersFromServer.find((user) => user.id === userId) || null;

  return userName || null;
}

function getCommentsById(postId: number): Comment[] {
  const commentsBody = commentsFromServer.filter((comment) => (
    comment.postId === postId
  ));

  return commentsBody;
}

const Posts: PreparedPost[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList Posts={Posts} />
  </section>
);
