import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/user';
import { Comments } from './types/comments';
import { Posts, PostsToRender } from './types/posts';

export function prepareData(
  comments: Comments[],
  posts: Posts[],
  users: User[],
): PostsToRender[] {
  return (
    posts.map((post) => ({
      ...post,
      comments: comments.filter((comment) => (
        comment.postId === post.id) || null),
      user: users.find((user) => user.id === post.userId) || null,
    })));
}

const postsToRender = prepareData(
  commentsFromServer,
  postsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsToRender} />
  </section>
);
