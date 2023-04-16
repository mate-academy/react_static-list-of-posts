import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PreparedPost } from './types/PreparedPost';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(({ id }) => id === userId);

  return foundUser || null;
}

function getComments(idOfPost: number): Comment[] {
  const comments = commentsFromServer
    .filter((comment) => comment.postId === idOfPost);

  return comments;
}

export const preparedPosts: PreparedPost[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
