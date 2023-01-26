import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { FullPost, Post } from './types/Posts';
import { User } from './types/Users';
import { Comment } from './types/Comments';
import { PostList } from './components/PostList';

const preparePosts = (
  posts: Post[],
  comments: Comment[],
  users: User[],
): FullPost[] => {
  return posts.map((post: Post) => ({
    ...post,
    user: users.find((user: User) => post.userId === user.id) || null,
    comments: comments.filter((comment: Comment) => post.id === comment.postId),
  }));
};

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
