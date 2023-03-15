import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/user';
import { Comment } from './types/comment';
import { FullPost } from './types/fullPost';

function getUser(userId: number): User | null {
  const postUser = usersFromServer.find(user => user.id === userId);

  return postUser || null;
}

function getComments(id: number): Comment[] {
  return commentsFromServer.filter(comment => (
    comment.postId === id));
}

const posts: FullPost[] = postsFromServer.map(post => ({
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
