import React from 'react';
import { PostList } from './components/PostList';
import { User } from './types/user';
import { Post } from './types/post';
import { Comment } from './types/comment';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  // if there is no user with a given userId
  return foundUser || null;
}

function getComments(postId: number): Comment[] | null {
  const foundComment = commentsFromServer.filter(comment => {
    return comment.postId === postId;
  });

  return foundComment;
}

export const posts: Post[] = postsFromServer.map(post => ({
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
