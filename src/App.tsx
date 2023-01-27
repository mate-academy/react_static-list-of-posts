import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { CommentType } from './types/Comment';
import { PostType } from './types/Post';
import { PostList } from './components/PostList';
import { UserType } from './types/User';

const makeFullPosts = (
  posts: PostType[],
  comments: CommentType[],
  users: UserType[],
) => {
  return posts.map(post => ({
    ...post,
    user: users.find(user => post.userId === user.id),
    comments: comments.filter(comment => post.id === comment.postId),
  }));
};

const fullPosts = makeFullPosts(
  postsFromServer,
  commentsFromServer,
  usersFromServer,
);

export const App: React.FC = () => (

  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={fullPosts} />
  </section>
);
