import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';
import { Post } from './types/post';
import { User } from './types/user';
import { Comment } from './types/comment';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): User | null {
  return usersFromServer.find((user) => user.id === userId) || null;
}

function getCommentsById(postId: number): Comment[] {
  return commentsFromServer.filter((comment) => (
    comment.postId === postId
  ));
}

export const posts: Post[] = postsFromServer.map((post) => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>
    <PostList posts={posts} />
  </section>
);
