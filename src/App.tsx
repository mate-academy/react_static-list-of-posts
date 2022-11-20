import React from 'react';

import './App.scss';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(userId: number): User | null {
  const neededUser = usersFromServer.find(user => user.id === userId);

  return neededUser || null;
}

function getCommentByPostId(id: number): Comment[] {
  const neededComment = commentsFromServer.filter(comment => (
    comment.postId === id
  ));

  return neededComment;
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <PostList
      posts={posts}
    />
  </section>
);
