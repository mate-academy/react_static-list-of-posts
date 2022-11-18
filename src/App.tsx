import React from 'react';
import './App.scss';
import { User } from './types/user';
import { Comment } from './types/comment';
import { Post } from './types/post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

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
  comment: getCommentByPostId(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
