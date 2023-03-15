import React from 'react';
import './App.scss';

import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { FullPosts } from './types/FullPosts';

function getUserById(users: User[], userId: number) {
  return users.find((user) => user.id === userId);
}

function getCommentById(comments: Comment[], commentId: number) {
  return comments.filter((comment) => comment.postId === commentId);
}

export const posts: FullPosts[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(usersFromServer, post.userId),
  comments: getCommentById(commentsFromServer, post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
