import React from 'react';
import { PostList } from './components/PostList/index';
import { Users, Comments, Posts } from './types/index';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): Users | null {
  return usersFromServer.find(user => userId === user.id) || null;
}

function getComment(postId: number): Comments[] {
  return commentsFromServer.filter(comment => postId === comment.postId);
}

const mutetedPosts: Posts[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post.userId),
    comments: getComment(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={mutetedPosts} />
  </section>
);
