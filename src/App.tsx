import React from 'react';

import './App.scss';
import {
  Post, FullPost, Comment, User,
} from './react-app-env';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const preparePosts = (
  posts: Post[],
  comments: Comment[],
  users: User[],
): FullPost[] => (
  posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }))
);

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
