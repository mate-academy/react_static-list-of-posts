import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/post';
import { User } from './types/user';
import { PostList } from './components/PostList/PostList';
import { Comment } from './types/comment';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find((user) => (
    user.id === userId
  ));

  return foundUser || null;
}

function getComments(postId: number): Comment[] {
  const foundComments = commentsFromServer.filter((comment) => {
    return comment.postId === postId;
  });

  return foundComments;
}

export const App: React.FC = () => {
  const posts: Post[] = postsFromServer.map((post) => ({
    ...post,
    user: getUser(post.userId),
    comments: getComments(post.id),
  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={posts} />
    </section>
  );
};
