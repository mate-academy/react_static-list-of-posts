import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';

import usersFromServer from './api/users';
import { PostFromServer, Post } from './types/Posts';
import { UserFromServer } from './types/Users';
import { CommentFromServer } from './types/Comments';
import { PostList } from './components/PostList';

export function getPostByID(
  posts: PostFromServer[],
  users: UserFromServer[],
  commentsData: CommentFromServer[],
): Post[] {
  return posts.map((post) => ({
    ...post,
    user: users.find((user) => (
      user.id === post.userId
    )) || null,
    comments: commentsData.filter((comment) => (
      comment.postId === post.id
    )) || null,
  }));
}

const postsToRender = getPostByID(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsToRender} />
  </section>
);
