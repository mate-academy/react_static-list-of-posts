import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';

function getUserByID(userId: number): User | null {
  return usersFromServer.find((user: User) => user.id === userId) || null;
}

function getCommentById(id: number): Comment[] {
  return commentsFromServer.filter((comment: Comment) => comment.postId === id);
}

const posts: Post[] = postsFromServer.map(post => (
  {
    ...post,
    user: getUserByID(post.userId),
    comments: getCommentById(post.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
