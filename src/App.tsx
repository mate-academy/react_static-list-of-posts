import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { FullPost } from './types/FullPost';
import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { PostList } from './components/PostList';

function getUser(users: User[], post: Post) {
  return users.find((user) => user.id === post.userId) || null;
}

function getComments(comments: Comment[], post: Post) {
  return comments.filter(
    (comment) => comment.postId === post.id,
  );
}

const fullPosts: FullPost[] = postsFromServer.map((post) => {
  return {
    ...post,
    user: getUser(usersFromServer, post),
    comments: getComments(commentsFromServer, post),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList fullPosts={fullPosts} />
  </section>
);
