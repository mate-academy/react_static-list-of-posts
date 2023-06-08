import React from 'react';
import { PostList } from './components/PostList';

import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostWithComments } from './types/PostWithComments';

import './App.scss';

import { postsFromServer } from './api/posts';
import { commentsFromServer } from './api/comments';
import { usersFromServer } from './api/users';

function getPostComments(postId: number): Comment[] {
  return commentsFromServer.filter(
    (comment: Comment) => comment.postId === postId,
  );
}

function getPostAuthor(userId: number): User | null {
  const user = usersFromServer.find((author: User) => author.id === userId);

  return user || null;
}

const postsWithComments: PostWithComments[] = postsFromServer.map(
  (post: Post) => ({
    ...post,
    user: getPostAuthor(post.userId),
    comments: getPostComments(post.id),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsWithComments} />
  </section>
);
