import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';
import { Comment } from './types/CommentType';
import { User } from './types/UsersType';
import { Post } from './types/PostsType';

const getComments = (id: number): Comment[] => {
  return commentsFromServer.filter(
    (comment) => comment.postId === id,
  );
};

const getUser = (userId: number): User | null => {
  const foundUser = usersFromServer.find((user) => user.id === userId);

  return foundUser || null;
};

export const posts: Post[] = postsFromServer.map((post) => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id),
}));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
