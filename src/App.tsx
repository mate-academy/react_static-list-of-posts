import React from 'react';

import './App.scss';
import { User } from './types/user';
import { Post } from './types/post';
import { Comment } from './types/comment';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';
import { PostList } from './components/PostList';

function getProperUser(userId: number): User | null {
  const user = (usersFromServer.find((person) => (
    person.id === userId
  )));

  return user || null;
}

function getProperComment(postId: number): Comment[] {
  const comments = commentsFromServer.filter(
    (comment) => comment.postId === postId,
  );

  return comments;
}

export const preparedPosts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getProperUser(post.userId),
  comments: getProperComment(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postLists={preparedPosts} />
  </section>
);
