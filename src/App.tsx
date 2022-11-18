import React from 'react';
import { Posts } from './types/Posts';
import { Users } from './types/Users';
import { Comments } from './types/Comments';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import './App.scss';

const getUserById = (userId: number) : Users | null => {
  return (usersFromServer.find(user => user.id === userId) || null);
};

const getCommentByPostId = (postId: number): Comments[] => {
  return (commentsFromServer.filter(comment => comment.postId === postId));
};

const posts: Posts[] = postsFromServer.map(post => ({
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
