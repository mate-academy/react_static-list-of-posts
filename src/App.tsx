import React from 'react';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const userFind = usersFromServer.find(user => userId === user.id);

  return userFind || null;
}

function getComments(postId: number): Comment[] | null {
  const commentFind = commentsFromServer.filter((comment) => (
    postId === comment.postId));

  return commentFind.length > 0
    ? commentFind
    : null;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.id),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList postList={posts} />
  </section>
);
