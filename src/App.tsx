import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';

function getCommentsById(postId: number):Comment[] {
  const userWithComment = commentsFromServer.filter(comment => {
    const result = postId === comment.postId;

    return result;
  });

  return userWithComment || [];
}

function getUsersById(userId: number):User | null {
  const userWithPost = usersFromServer.find(user => {
    const result = user.id === userId;

    return result;
  });

  return userWithPost || null;
}

const posts: Post[] = postsFromServer.map((post) => {
  const result = {
    ...post,
    comments: getCommentsById(post.id),
    user: getUsersById(post.userId),
  };

  return result;
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
