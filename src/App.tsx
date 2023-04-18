import React from 'react';
import { PostList } from './components/PostList/index';
import { Users, Comment, Post } from './types/index';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): Users | null {
  return usersFromServer.find(user => userId === user.id) || null;
}

function getComment(postId: number): Comment[] {
  return commentsFromServer.filter(comment => postId === comment.postId);
}

const mutetedPosts: Post[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getComment(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={mutetedPosts} />
  </section>
);
