import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(postId: number): Comment[] | null {
  const foundComments = commentsFromServer.filter(comment => comment.postId
    === postId);

  if (foundComments.length >= 1) {
    return foundComments;
  }

  return null;
}

export const posts: Post[] = postsFromServer.map(somePost => ({
  ...somePost,
  user: getUser(somePost.userId),
  comments: getComments(somePost.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
