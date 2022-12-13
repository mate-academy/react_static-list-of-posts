import React from 'react';

import './App.scss';
import { PostList } from './components/PostList/PostList';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

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
