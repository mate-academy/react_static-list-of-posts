import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PreparedPost } from './types/PreparedPost';
import { User } from './types/User';

function getUserById(userId: number): User | null {
  const user = usersFromServer.find(({ id }) => id === userId);

  return user || null;
}

const preparedPosts: PreparedPost[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(post.userId),
  comments: commentsFromServer
    .filter(({ postId }) => postId === post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
