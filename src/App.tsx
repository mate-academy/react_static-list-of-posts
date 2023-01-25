import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

function getUserById(userId: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === userId);

  return foundUser || null;
}

function getCommentsByPostId(postId: number): Comment[] {
  const foundComment = commentsFromServer.filter(comment => (
    comment.postId === postId
  ));

  return foundComment;
}

export const posts: Post[] = postsFromServer.map(post => {
  return ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsByPostId(post.id),
  });
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
