import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Post } from './types/Post';
import { FullPost } from './types/FullPost';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

const preparePosts = (
  posts: Post[],
  comments: Comment[],
  users: User[],
): FullPost[] => {
  return posts.map((post) => ({
    ...post,
    user: users.find((user) => user.id === post.userId),
    comments: comments.filter((comment) => comment.postId === post.id),
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

    <PostList allPosts={preparedPosts} />
  </section>
);
