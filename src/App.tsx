import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './components/Types/User';
import { Post } from './components/Types/Post';
import { Comment } from './components/Types/Comment';
import { PostList } from './components/PostList/PostList';

function findUserWithId(userId: number): User | null {
  return usersFromServer.find((user: User) => (user.id === userId)) || null;
}

function findCommentsWithID(id: number): Comment[] {
  return commentsFromServer.filter((comment: Comment) => (
    comment.postId === id
  ));
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: findUserWithId(post.userId),
  comments: findCommentsWithID(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
