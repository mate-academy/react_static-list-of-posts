import React from 'react';

import './App.scss';
import { PostList } from './components/PostList';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';

function getUser(post:Post, users: User[]) {
  const user = users.find(
    (person) => person.id === post.userId,
  );

  return user || null;
}

function getPostComments(post:Post, comments: Comment[]) {
  const postComments = comments.filter(
    (item) => post.id === item.postId,
  );

  return postComments;
}

function createPostsInfo(
  posts: Post[],
  comments:Comment[],
  users: User[],
) {
  const postsInfo = posts.map(post => {
    return {
      ...post,
      user: getUser(post, users),
      comments: getPostComments(post, comments),
    };
  });

  return postsInfo;
}

export const App: React.FC = () => {
  const postsInfo = createPostsInfo(
    postsFromServer,
    commentsFromServer,
    usersFromServer,
  );

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <PostList postsList={postsInfo} />
    </section>
  );
};
