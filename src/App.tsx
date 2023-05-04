import './App.scss';
import React from 'react';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './components/types/User';
import { Comment } from './components/types/Comment';
import { PostList } from './components/PostList/PostList';
import { Post } from './components/types/Posts';

function getUserById(users: User[], postId: number): User | null {
  return users.find(user => (
    user.id === postId
  )) || null;
}

function getCommentsByPostId(comments: Comment[], postId: number) {
  return comments.filter(comment => (
    comment.postId === postId
  ));
}

const predaredPosts: Post[] = postsFromServer.map(
  post => ({
    ...post,
    user: getUserById(usersFromServer, post.userId),
    comments: getCommentsByPostId(commentsFromServer, post.id),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={predaredPosts} />
  </section>
);
