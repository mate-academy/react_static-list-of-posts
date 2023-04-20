import React from 'react';
import { PostList } from './components/PostList/index';
import { User, Comment, Post } from './types/index';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): User | null {
  return usersFromServer.find(user => userId === user.id) || null;
}

function getCommentById(id: number): Comment[] {
  return commentsFromServer.filter(comment => id === comment.id);
}

const preparedPosts: Post[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentById(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
