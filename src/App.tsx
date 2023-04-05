import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/UserInfo';
import { Comment } from './types/CommentInfo';
import { Post } from './types/PostInfo';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(
    user => user.id === userId,
  );

  return foundUser || null;
}

function getCommentsById(postId: number): Comment[] {
  const filteredComments = commentsFromServer.filter(
    comment => (comment.postId === postId),
  );

  return filteredComments;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList
      posts={posts}
    />
  </section>
);
