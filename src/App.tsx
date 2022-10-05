import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

function getUserForPost(userId: number) {
  return usersFromServer.find(user => user.id === userId);
}

function getCommentsForPost(targetPostId: number) {
  return commentsFromServer
    .filter(comment => comment.postId === targetPostId);
}

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserForPost(post.userId),
  comments: getCommentsForPost(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />

  </section>
);
