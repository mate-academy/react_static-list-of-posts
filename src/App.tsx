import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostType } from './Types/PostType';
import { UserType } from './Types/UserType';
import { CommentType } from './Types/CommentType';

import { PostList } from './components/PostList';

function getUsersPost(userId: number): UserType | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComents(id: number): CommentType[] {
  const comments = commentsFromServer
    .filter(comment => comment.postId === id);

  return comments;
}

export const posts: PostType[] = postsFromServer.map(post => ({
  ...post,
  user: getUsersPost(post.userId),
  comments: getComents(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
