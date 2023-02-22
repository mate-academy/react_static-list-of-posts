import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/post';
import { User } from './types/user';
import { Comment } from './types/comment';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComment(postId: number): Comment[] | [] {
  const foundComments = commentsFromServer
    .filter((comment) => comment.postId === postId);

  return foundComments || [];
}

export const posts: Post[] = postsFromServer.map((post) => {
  return ({
    ...post,
    user: getUser(post.userId),
    comments: getComment(post.id),
  });
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
