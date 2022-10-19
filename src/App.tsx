import React from 'react';

import './App.scss';

import { PostAllInfo } from './types/PreparedPost';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { Post } from './types/Post';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';

const getPosts = (
  posts: Post[],
  comments: Comment[],
  users: User[],
) => (
  posts.map((currentPost: Post): PostAllInfo => ({
    ...currentPost,
    user: users.find(user => user.id === currentPost.userId) || null,
    comments: comments.filter(comment => comment.postId === currentPost.id),
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
