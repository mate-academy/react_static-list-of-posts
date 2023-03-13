import React from 'react';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

const posts: Post[] = postsFromServer.map(post => {
  const user: User | null = usersFromServer.find(
    ({ id }) => id === post.userId,
  ) || null;

  const comments: Comment[] = commentsFromServer.filter(
    ({ postId }) => postId === post.id,
  );

  const postCopy: Post = {
    ...post,
    user,
    comments,
  };

  return postCopy;
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts... NOT</h1>

    <PostList posts={posts} />
  </section>
);
