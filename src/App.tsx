import React from 'react';

import './App.scss';
import { User } from './types/User';
import { Comment } from './types/Comment';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => userId === user.id);

  return foundUser || null;
}

function getComment(id: number): Comment[] {
  const postComms = commentsFromServer.filter(comment => id === comment.postId);

  return postComms || [];
}

const posts: Post[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post.userId),
    comments: getComment(post.id),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
