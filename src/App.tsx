import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Comment } from './Types/сomments';
import { Post } from './Types/posts';
import { User } from './Types/users';

function comments(postId: number): Comment[] | null {
  const commentFinder = commentsFromServer.filter(com => com.postId === postId);

  return commentFinder.length > 0
    ? commentFinder
    : null;
}

function user(userId: number): User | null {
  const postUser = usersFromServer.find(human => human.id === userId);

  return postUser || null;
}

const post: Post[] = postsFromServer.map(poost => ({
  ...poost,
  comments: comments(poost.id),
  user: user(poost.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={post} />
  </section>
);
