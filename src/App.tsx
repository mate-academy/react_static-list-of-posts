import React from 'react';

import './App.scss';
import {
  Comment,
  Post,
  User,
  InfoBlock,
} from './type/types';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

const preparePosts = (
  posts: Post[],
  comments: Comment[],
  users: User[],
): InfoBlock[] => {
  return posts.map((post) => ({
    ...post,
    comments: comments.filter((comment) => (comment.postId === post.id)),
    user: users.find((user) => (user.id === post.userId)),
  }));
};

const arrayPosts = preparePosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList infoBlocks={arrayPosts} />
  </section>
);
