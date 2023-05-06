import React from 'react';

import './App.scss';

import { Comment, User, Post } from './types';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const getComments = (id: number) => (
  commentsFromServer.filter(
    (comment: Comment) => comment.postId === id,
  )
);

const getUser = (userId: number) => (
  usersFromServer.find(
    (user: User) => user.id === userId,
  )
);

const posts = postsFromServer.map((post: Post) => {
  return ({
    ...post,
    comments: getComments(post.id),
    user: getUser(post.userId),
  });
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
