import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { ExtendedPost } from './types/ExtendedPost';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer.filter((comment) => (
    comment.postId === postId
  ));

  return foundComments;
}

const extendedPosts: ExtendedPost[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={extendedPosts} />
  </section>
);
