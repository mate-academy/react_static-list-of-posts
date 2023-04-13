import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { UserComment } from './types/Comment';
import { PreparedPost } from './types/PreparedPost';
import { PostList } from './components/PostList';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find((user) => user.id === userId);

  return foundUser || null;
}

function getCommentsById(id: number): UserComment[] {
  const postComments = commentsFromServer.filter(
    (comment) => comment.postId === id,
  );

  return postComments;
}

const preparedPosts: PreparedPost[] = postsFromServer.map(
  (post) => ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList preparedPosts={preparedPosts} />
  </section>
);
