import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

const findUser = (userId: number): User | null => (
  usersFromServer.find(person => userId === person.id) || null
);

const getAllCommets = (postId: number): Comment[] => (
  commentsFromServer.filter(comment => (postId === comment.postId))
);

const fullPosts: Post[] = postsFromServer.map(post => {
  const user = findUser(post.userId);
  const comments = getAllCommets(post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>

    <PostList posts={fullPosts} />
  </section>
);
