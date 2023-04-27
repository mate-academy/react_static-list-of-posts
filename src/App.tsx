import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList/PostList';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostWithUserAndComments } from './types/PostWithUserAndComments';

function getUser(userId: number): User | undefined {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser;
}

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer.filter(comment => {
    return comment.postId === postId;
  });

  return foundComments;
}

export const posts: PostWithUserAndComments[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId) as User,
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
