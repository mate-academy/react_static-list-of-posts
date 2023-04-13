import React from 'react';
import './App.scss';
import { PostList } from './components/PostList';
import { Post } from './types/Post';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUserById(users: User[], postId: number): User | undefined {
  return users.find(user => (
    user.id === postId
  ));
}

function getCommentsForPost(
  comments: Comment[], postId: number,
): Comment[] {
  return comments.filter(comment => (
    comment.postId === postId
  ));
}

const predaredPosts: Post[] = postsFromServer.map(
  post => ({
    ...post,
    user: getUserById(usersFromServer, post.userId) || null,
    comments: getCommentsForPost(commentsFromServer, post.id),
  }),
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={predaredPosts} />
  </section>
);
