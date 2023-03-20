import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Post, ExtendedPost } from './types/Post';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

const extendPosts = (
  users: User[],
  posts: Post[],
  comments: Comment[],
): ExtendedPost[] => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
};

const extendedPosts = extendPosts(
  usersFromServer,
  postsFromServer,
  commentsFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={extendedPosts} />
  </section>
);
