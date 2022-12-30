import React from 'react';

import './App.scss';

import { User } from './types/Users';
import { Post } from './types/Posts';
import { Comment } from './types/Comments';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(pstId: number): Comment[] | null {
  const foundComment = commentsFromServer.filter(
    comment => comment.postId === pstId,
  );

  return foundComment || null;
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
