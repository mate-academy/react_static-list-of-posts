import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { Post } from './types/post';
import { User } from './types/user';
import { PostWithAllDate } from './types/postWithAllDate';
import { Comment } from './types/comment';

export const App: React.FC = () => {
  const createPostDate = (
    posts: Post[],
    comments: Comment[],
    users: User[],
  ): PostWithAllDate[] => {
    return posts.map((el: Post) => (
      {
        ...el,
        user: users.filter((user: User) => user.id === el.userId)[0],
        comments: comments
          .filter((comment: Comment) => comment.postId === el.id),
      }
    ));
  };

  const listPosts: PostWithAllDate[] = createPostDate(
    postsFromServer,
    commentsFromServer,
    usersFromServer,
  );

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>
      <PostList posts={listPosts} />
    </section>
  );
};
