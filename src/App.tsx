import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import { PostType } from './types/PostType';
import { UserType } from './types/UserType';
import { CommentType } from './types/CommentType';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): UserType | null {
  const foundUser = usersFromServer.find((user) => user.id === userId);

  return foundUser || null;
}

function getCommentsByPostId(postId: number): CommentType[] {
  return commentsFromServer.filter((comment) => (
    comment.postId === postId
  ));
}

export const posts: PostType[] = postsFromServer.map((post) => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsByPostId(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
