import React from 'react';
import './App.scss';

import postsFromServer from './api/posts';
import usersFromServer from './api/users';
import commentsFromServer from './api/comments';

import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

const preparedPosts: Post[] = postsFromServer.map(post => {
  const user = usersFromServer.find(u => u.id === post.userId) as User;
  const comments = commentsFromServer.filter(
    comment => comment.postId === post.id,
  ) as Comment[];

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preparedPosts} />
  </section>
);
