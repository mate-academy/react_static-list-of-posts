import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { FullPostInfo } from './types/fullPostInfo';
import { Post } from './types/post';
import { User } from './types/user';
import { Comment } from './types/comment';

function getCommentsByPostId(comments: Comment[], postId: number): Comment[] {
  return comments.filter(comment => comment.postId === postId);
}

function getUserById(users: User[], id: number): User | null {
  return users.find(user => user.id === id) || null;
}

export function getPosts(
  posts: Post[],
  comments: Comment[],
  users: User[],
): FullPostInfo[] {
  return posts.map(post => ({
    ...post,
    user: getUserById(users, post.userId),
    comments: getCommentsByPostId(comments, post.id),
  }));
}

const posts: FullPostInfo[] = getPosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>

    <PostList posts={posts} />
  </section>
);
