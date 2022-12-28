import React from 'react';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(id: number): User | null {
  return usersFromServer.find(user => id === user.id) || null;
}

function getCommentsById(id: number): Comment[] {
  return commentsFromServer.filter(comment => id === comment.postId);
}

const posts: Post[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
