import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostFromServer } from './types/Post';
import { UserFromServer } from './types/User';
import { CommentFromServer } from './types/Comment';
import { PostList } from './components/PostList';

function comments(postId: number): CommentFromServer[] | null {
  const commentFinder = commentsFromServer.filter(com => com.postId === postId);

  return commentFinder.length > 0
    ? commentFinder
    : null;
}
function user(userId: number): UserFromServer | null {
  const postUser = usersFromServer.find(human => human.id === userId);

  return postUser || null;
}

const postsRender: PostFromServer[] = postsFromServer.map(poost => ({
  ...poost,
  comments: comments(poost.id),
  user: user(poost.userId),
}));



export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postsRender}/>
  </section>
);
