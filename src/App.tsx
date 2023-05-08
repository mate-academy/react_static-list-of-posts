import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';
import { PreparedPost } from './types/PreparedPost';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

const findUser = (post: Post) => (usersFromServer
  .find(({ id }) => id === post.userId) || null);

const filterCommentsById = (post: Post) => (commentsFromServer
  .filter(({ postId }) => postId === post.id));

const preparedPosts: PreparedPost[] = postsFromServer.map(
  (post) => ({
    ...post,
    user: findUser(post),
    comments: filterCommentsById(post),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
