import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { PostList } from './components/PostList';
import { Comment } from './types/Comment';
import { User } from './types/User';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => (user.id === userId));

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const foundComment = commentsFromServer
    .filter(comment => (comment.postId === postId));

  return foundComment;
}

const posts: Post[] = postsFromServer.map(post => (
  {
    ...post,
    user: getUserById(post.userId),
    comments: getComments(post.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
