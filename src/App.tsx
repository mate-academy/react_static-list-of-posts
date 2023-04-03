import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post, User, Comment } from './types/types';

import { PostList } from './components/PostList';

const posts: Post[] = postsFromServer.map(post => {
  const user: User | null = usersFromServer.find(currUser => {
    return currUser.id === post.userId;
  }) || null;
  const comments: Comment[] = commentsFromServer.filter(comment => {
    return comment.postId === post.id;
  });

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
