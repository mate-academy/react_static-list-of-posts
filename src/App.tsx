import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './Types/User';
import { Post } from './Types/Post';
import { Comment } from './Types/Comment';
import { PostList } from './components/PostList/PostList';

function findUserById(userId: number): User | null {
  return usersFromServer.find((user: User) => user.id === userId) || null;
}

function findCommentsByID(id: number): Comment[] {
  return commentsFromServer.filter((comment: Comment) => comment.postId === id);
}

const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: findUserById(post.userId),
  comments: findCommentsByID(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
