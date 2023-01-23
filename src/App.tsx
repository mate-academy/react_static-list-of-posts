import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './Types/Post';
import { User } from './Types/User';
import { Comment } from './Types/Comment';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const userForPost = usersFromServer.find(user => (user.id === userId));

  return userForPost || null;
}

function getComment(postId: number): Comment[] {
  return commentsFromServer.filter(comment => (comment.postId === postId));
}

const posts: Post[] = postsFromServer.map(post => (
  {
    ...post,
    user: getUser(post.userId),
    comments: getComment(post.id),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
