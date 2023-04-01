import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';
import { User } from './types/User';
import { Comments } from './types/Comments';
import { Posts } from './types/Posts';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
};

function getComments(postID: number): Comments[] {
  const commentsArray = commentsFromServer.filter(
    comment => comment.postId === postID,
  );

  return commentsArray;
};

export const posts: Posts[] = postsFromServer.map(post => ({
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
