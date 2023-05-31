import React from 'react';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comments } from './types/Comments';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import './App.scss';

const getUserById = (userId: number): User | null => (
  usersFromServer.find((user) => (
    user.id === userId
  )) || null
);

const getCommentsById = (postId: number): Comments[] => (
  commentsFromServer.filter((comment) => (
    comment.postId === postId
  ))
);

const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
