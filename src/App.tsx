import React from 'react';

import './App.scss';

import { PostAllInfo } from './types/PostAllInfo';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
// import { post } from 'cypress/types/jquery';
// import { PostInfo } from './components/PostInfo';

import { PostList } from './components/PostList';

const getPosts = (
  posts: Post[],
  comments: Comment[],
  users: User[],
) => (
  posts.map((currPost: Post): PostAllInfo => ({
    ...currPost,
    user: users.find(user => user.id === currPost.userId) || null,
    comments: comments.filter(comment => comment.postId === currPost.id),
  }))
);

const postInfo: PostAllInfo[] = getPosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList postInfo={postInfo} />
  </section>
);
