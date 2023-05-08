import './App.scss';
import React from 'react';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList/PostList';
import { Post } from './types/Posts';

function getUserById(id: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === id);

  return foundUser || null;
}

function getCommentsByPostId(postId: number): Comment[] {
  const foundComment = commentsFromServer.filter(comment => (
    comment.postId === postId
  ));

  return foundComment;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
