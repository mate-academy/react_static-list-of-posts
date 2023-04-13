import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './components/types/Post';
import { User } from './components/types/User';
import { Comment } from './components/types/Comment';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find((user) => user.id === userId) || null;

  return foundUser || null;
}

function getCommentsById(postId: number): Comment[] {
  const foundComments = commentsFromServer.filter((comment) => (
    comment.postId === postId));

  return foundComments;
}

export const App: React.FC = () => {
  const posts: Post[] = postsFromServer.map((post) => ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  }
  ));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
