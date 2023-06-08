import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { CompletePost } from './types/CompletePost';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comments } from './types/Comments';

const findUser = (userId: number): User | null => (
  usersFromServer.find(user => (
    user.id === userId
  )) || null
);

const getComments = (postId: number): Comments[] => (
  commentsFromServer.filter((comment) => (
    comment.postId === postId
  ))
);

const completePosts: CompletePost[] = postsFromServer.map(post => {
  return {
    ...post,
    user: findUser(post.userId),
    comments: getComments(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={completePosts} />
  </section>
);
