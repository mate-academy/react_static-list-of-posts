import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';

function mergeDatabases(posts: Post[], comments: Comment[], users: User[]) {
  const usersMap = new Map();

  users.forEach(user => {
    usersMap.set(user.id, user);
  });

  // Tworzymy mapę komentarzy pogrupowanych po postId
  const commentsMap = new Map();

  comments.forEach(comment => {
    if (!commentsMap.has(comment.postId)) {
      commentsMap.set(comment.postId, []);
    }

    commentsMap.get(comment.postId).push(comment);
  });

  const mergedPosts = posts.map(post => {
    const userData = usersMap.get(post.userId) || {};
    const postComments = commentsMap.get(post.id) || [];

    return {
      ...post,
      user: {
        id: userData.id,
        name: userData.name,
        username: userData.username,
        email: userData.email,
      },
      comments: postComments.map((comment: Comment) => ({
        id: comment.id,
        name: comment.name,
        email: comment.email,
        body: comment.body,
      })),
    };
  });

  return mergedPosts;
}

export const App: React.FC = () => {
  const mergedPosts = mergeDatabases(
    postsFromServer,
    commentsFromServer,
    usersFromServer,
  );

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={mergedPosts} />
    </section>
  );
};
