import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { PostFromServer } from './types/PostFromServer';
import { CommentFromServer } from './types/CommentFromServer';
import { UserFromServer } from './types/UserFromServer';
import { PostList } from './components/PostList';

function preparePosts(
  posts: PostFromServer[],
  comments: CommentFromServer[],
  users: UserFromServer[],
): Post[] {
  return posts.map((post) => (
    {
      ...post,
      user: users.find((user) => (
        post.userId === user.id
      )) || null,
      comments: comments.filter((comment) => (
        comment.postId === post.id
      )),
    }
  ));
}

const preparedPosts = preparePosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postList={preparedPosts} />
  </section>
);
