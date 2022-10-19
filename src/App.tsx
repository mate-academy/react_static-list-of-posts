import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Post } from './types/Post';
import { Comment } from './types/Comment';
import { FullInfo } from './types/FullInfo';
import { PostList } from './components/PostList';

function getPosts(
  posts: Post[],
  users: User[],
  comments: Comment[],
): FullInfo[] {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));
}

const posts = getPosts(postsFromServer, usersFromServer, commentsFromServer);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
