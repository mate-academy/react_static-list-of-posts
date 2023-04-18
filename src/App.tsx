import React from 'react';
import './App.scss';
import { Comment } from './types/Comment';
import { User } from './types/User';
import { Post } from './types/Post';
import { PostList } from './components/PostList';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUserById(id: number): User | null {
  const foundUser = usersFromServer.find(user => user.id === id);

  return foundUser || null;
}

function getCommentById(id: number): Comment[] {
  const comments = commentsFromServer.filter(comment => comment.postId === id);

  return comments;
}

const posts: Post[] = postsFromServer
  .map((post) => ({
    ...post,
    user: getUserById(post.userId),
    comments: getCommentById(post.id),
  }));

export const App: React.FC = () => {
  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList posts={posts} />
    </section>
  );
};
