import React from 'react';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import './App.scss';

const getUserById = (userId: number) : User | null => {
  return (usersFromServer.find(user => user.id === userId) || null);
};

const getCommentByPostId = (postId: number): Comment[] => {
  return (commentsFromServer.filter(comment => comment.postId === postId));
};

const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
