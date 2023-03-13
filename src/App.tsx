import React from 'react';
import { User } from './types/User';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getUserById = (userId: number): User | null => {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

const posts = postsFromServer.map(post => (
  {
    ...post,
    user: getUserById(post.userId),
    comments: commentsFromServer.filter(comment => (
      comment.postId === post.id
    )),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
