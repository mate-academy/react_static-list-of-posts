import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { PostList } from './components/PostList';

function getComments(postId: number): Comment[] {
  const listOfComments = commentsFromServer.filter(
    comment => comment.postId === postId,
  );

  return listOfComments;
}

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(
    user => user.id === userId,
  );

  return foundUser || null;
}

const posts: Post[] = postsFromServer.map(post => {
  const user: User | null = getUser(post.userId);
  const comments: Comment[] | null = getComments(post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
