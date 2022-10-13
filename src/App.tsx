import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './Types/Post';
import { User } from './Types/User';
import { Comment } from './Types/Comment';
import { FullPost } from './Types/FullPost';
import { PostList } from './components/PostList';

const preperePosts = (
  posts: Post[],
  users: User[],
  comments: Comment[],
): FullPost[] => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));
};

const preperedPosts = preperePosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={preperedPosts} />
  </section>
);
