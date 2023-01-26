import React from 'react';

import './App.scss';

import { Post, PostComplete } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const preparePosts = (
  posts: Post[], // userId
  comments: Comment[], // postId
  users: User[],
): PostComplete[] => {
  return posts.map((post) => ({
    ...post,
    comments: comments.filter((comment) => comment.postId === post.id),
    user: users.find((user) => user.id === post.userId) || null,
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
