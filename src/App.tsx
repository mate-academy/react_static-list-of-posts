import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { FullPost } from './types/FullPost';
import { User } from './types/User';
import { PostList } from './components/PostList';
import { Comment } from './types/Comment';

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer.filter((comment) => {
    return comment.postId === postId;
  });

  return foundComments;
}

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find((user) => user.id === userId);

  return foundUser || null;
}

const preparePosts = (
  posts: Post[],
): FullPost[] => {
  return posts.map(post => ({
    ...post,
    comments: getComments(post.id),
    user: getUser(post.userId),
  }));
};

const preparedPosts = preparePosts(
  postsFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
