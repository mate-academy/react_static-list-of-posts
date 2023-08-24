import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function getUser(userId: number): User {
  const findUser = usersFromServer.find(user => user.id === userId);

  return findUser || {
    id: 0,
    name: '',
    username: '',
    email: '',
  };
}

function getComments(id: number): Comment[] {
  const findComments = commentsFromServer.filter(
    comment => comment.postId === id,
  );

  return findComments;
}

export const App: React.FC = () => {
  const posts: Post[] = postsFromServer.map(post => ({
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
