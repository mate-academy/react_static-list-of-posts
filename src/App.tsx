import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post, PostforRender } from './types/Post';

export function getPostByID(
  posts: Post[],
  users: User[],
  comments: Comment[],
): PostforRender[] {
  return posts.map((post) => ({
    ...post,
    user: users.find((user) => (
      user.id === post.userId
    )) || null,
    comments: comments.filter((comment) => (
      comment.postId === post.id
    )) || null,
  }));
}

const postsToRender = getPostByID(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsToRender} />
  </section>
);
