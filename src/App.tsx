import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import { User } from './types/User';
import { Comment } from './types/Comment';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getComments(id: number): Comment[] {
  const foundComments = commentsFromServer.filter(comment => {
    return comment.postId === id;
  });

  return foundComments;
}

const posts = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <div className="PostList">
      <PostList posts={posts} />
    </div>
  </section>
);
