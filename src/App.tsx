import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import {
  Comment,
  Post,
  PostData,
  User,
} from './react-app-env';
import { PostList } from './components/PostList';

const prepareUserData = (
  posts: Post[],
  comments: Comment[],
  users: User[],
): PostData[] => posts.map((post) => ({
  ...post,
  user: users.find((user) => user.id === post.userId),
  comments: comments.filter((comment) => comment.postId === post.id),
}));

const postData = prepareUserData(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);
// post (userId) -> user -> comment (postId);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postData} />
  </section>
);
