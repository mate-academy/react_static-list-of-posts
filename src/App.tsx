import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { PostList } from './components/PostList';
import { Comment } from './types/Comment';

const getComments = (allComments: Comment[], postId: number) => {
  const comments = allComments.filter(comment => comment.postId === postId);

  return comments.length > 0 ? comments : null;
};

const posts: Post[] = postsFromServer.map(post => (
  {
    ...post,
    comments: getComments(commentsFromServer, post.id),
    user: usersFromServer.find(user => user.id === post.userId) || null,
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
