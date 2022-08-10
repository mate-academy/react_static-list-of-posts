import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/post';
import { User } from './types/user';
import { Comment } from './types/comment';
import { FullPost } from './types/fullpost';
import { PostList } from './components/PostList';

export const App: React.FC = () => {
  const preparePost = (
    posts: Post[],
    comments: Comment[],
    users: User[],
  ): FullPost[] => {
    return posts.map((post: Post) => ({
      ...post,
      user: users.find((user: User) => user.id === post.userId) || null,
      comment: comments
        .filter((comment: Comment) => comment.postId === post.id),
    }));
  };

  const preparedPosts = preparePost(
    postsFromServer,
    commentsFromServer,
    usersFromServer,
  );

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList postlist={preparedPosts} />
    </section>
  );
};
