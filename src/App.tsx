import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';

const postsWithComments: Post[] = postsFromServer.map((post) => {
  const comments: Comment[] = commentsFromServer.filter(comment => {
    return comment.postId === post.id;
  });

  const user: User | undefined = usersFromServer.find(currentUser => {
    return currentUser.id === post.userId;
  });

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={postsWithComments} />
  </section>
);
