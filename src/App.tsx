import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PreparedPost } from './types/PreparedPost';
import { PostList } from './components/PostList/PostList';

function getUserById(id: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === id);

  return foundUser || null;
}

function getCommentById(id: number): Comment[] {
  return commentsFromServer.filter(comment => comment.postId === id);
}

const posts: PreparedPost[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentById(post.id),
}));

export const App: React.FC = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
