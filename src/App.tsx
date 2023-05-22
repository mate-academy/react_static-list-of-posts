import { FC } from 'react';
import { PostList } from './components/PostList';
import { Post } from './types/Post';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const getUserById = (userId: number) => (
  usersFromServer.find((user) => (
    user.id === userId
  )) || null
);

const getCommentsById = (postId: number) => (
  commentsFromServer.filter((comment) => (
    comment.postId === postId
  ))
);

const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUserById(post.userId),
  comments: getCommentsById(post.id),
}));

export const App: FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
