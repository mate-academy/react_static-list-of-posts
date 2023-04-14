import React from 'react';
import { PostList } from './components/PostList';
import { PreparedPost } from './types/PreparedPost';
import { User } from './types/User';
import { Comment } from './types/Comment';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number):User | null {
  const foundUser = usersFromServer.find(({ id }) => (id === userId));

  return foundUser || null;
}

function getComments(id: number): Comment[] {
  const foundComments = commentsFromServer
    .filter(({ postId }) => postId === id);

  return foundComments;
}

const preparedPosts: PreparedPost[] = postsFromServer.map(
  (post) => ({
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
