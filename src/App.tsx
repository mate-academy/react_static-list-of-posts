import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { User } from './types/User';

const getUserById = (userID: number): User | null => {
  const userData = usersFromServer.find((user: User) => {
    return user.id === userID;
  });

  return userData || null;
};

const getCommentsById = (id: number): Comment[] => {
  const comments = commentsFromServer.filter((comment: Comment) => {
    return comment.postId === id;
  });

  return comments;
};

const posts: Post[] = postsFromServer.map((post) => {
  return {
    ...post,
    user: getUserById(post.userId),
    comments: getCommentsById(post.id),
  };
});

export const App: React.FC = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />

    </section>
  );
};
