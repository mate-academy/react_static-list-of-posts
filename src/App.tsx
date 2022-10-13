import React from 'react';

import './App.scss';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

const createPosts = (
  posts: Post[],
  commentsList: Comment[],
  users: User[],
) => {
  return posts.map(post => ({
    ...post,
    commentsList: commentsList.filter(comments => comments.postId === post.id),
    user: users.find(user => user.id === post.userId),
  }));
};

export const posts = createPosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
