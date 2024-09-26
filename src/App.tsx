import React from 'react';
import postsData from './api/posts';
import commentsData from './api/comments';
import usersData from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import './App.scss';

const usersMap: { [key: number]: User } = {};

usersData.forEach((user: User) => {
  usersMap[user.id] = user;
});

const commentsMap: { [key: number]: Comment[] } = {};

commentsData.forEach((comment: Comment) => {
  const { postId, ...rest } = comment;

  if (!commentsMap[postId]) {
    commentsMap[postId] = [];
  }

  commentsMap[postId].push({ postId, ...rest } as Comment);
});

const posts: Post[] = postsData.map((post: Post) => {
  return {
    ...post,
    user: usersMap[post.userId],
    comments: commentsMap[post.id] || [],
  };
});

// Przyznam , że miałem z duży problem z tym warunkiem i musiałem psołuzyć sie pomocą bota

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
