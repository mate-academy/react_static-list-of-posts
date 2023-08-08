import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';

const getComments = (postId: number): Comment[] => {
  return commentsFromServer.filter(comment => postId === comment.postId);
};

const getUser = (userId: number): User | undefined => {
  return usersFromServer.find(user => user.id === userId);
};

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  comments: getComments(post.id),
  user: getUser(post.userId),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
