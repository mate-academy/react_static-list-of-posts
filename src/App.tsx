import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';
import { Fullpost } from './types/Fullpost';
import { PostList } from './components/PostList';

function getAuthorById(authors: User[], postId: number) {
  return authors.find((author) => author.id === postId);
}

function preparePosts(
  posts: Post[],
  comments: Comment[],
  authors: User[],
): Fullpost[] {
  return posts.map((post) => ({
    ...post,
    author: getAuthorById(authors, post.id),
    comments: comments.filter((comment) => comment.postId === post.id),
  }));
}

const preparedPosts = preparePosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
