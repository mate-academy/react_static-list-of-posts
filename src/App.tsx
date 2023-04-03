import React from 'react';
import { PostList } from './components/PostList';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { FullPost } from './types/FullPost';

const preparePosts = (
  posts: Post[],
  users: User[],
  comments: Comment[],
): FullPost[] => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId) || null,
    comments: comments.filter(comment => comment.postId === post.id),
  }));
};

const preparedPosts = preparePosts(
  postsFromServer,
  usersFromServer,
  commentsFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={preparedPosts} />
  </section>
);
