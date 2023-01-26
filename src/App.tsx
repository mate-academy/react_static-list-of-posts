import React from 'react';
import { Post, FullPost } from './types/post';
import { Comment } from './types/comment';
import { User } from './types/user';
import { PostList } from './components/PostList';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

export const preparePosts = (
  posts: Post[],
  comments: Comment[],
  users: User[],
): FullPost[] => {
  return posts.map(post => (
    {
      ...post,
      comments: comments.filter(comment => comment.postId === post.id),
      user: users.find(user => user.id === post.userId) || null,
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
