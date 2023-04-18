import React from 'react';
import './App.scss';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { PreparedPost } from './types/PreparedPost';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

function findUser(users: User[], post: Post): User | null {
  return users.find(({ id }) => post.userId === id) || null;
}

function findComments(comments: Comment[], post: Post): Comment[] {
  return comments.filter(({ postId }) => post.id === postId);
}

const posts: PreparedPost[] = postsFromServer.map(post => (
  {
    ...post,
    user: findUser(usersFromServer, post),
    comments: findComments(commentsFromServer, post),
  }
));

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>

    <PostList posts={posts} />
  </section>
);
