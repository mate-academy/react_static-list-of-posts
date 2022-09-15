import React from 'react';

import { PostList } from './components/PostList';

import { Comments } from './type/Comments';
import { User } from './type/Users';
import { Post } from './type/Post';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

function getUser(userId: number): User | null {
  const foundUser = usersFromServer.find(user => userId === user.id)

  return foundUser || null;
}

function getComments(postId: number): Comments[] {

  return commentsFromServer.filter(comment => postId === comment.postId)
}

export const posts: Post[] = postsFromServer.map(post => ({
  ...post,
  user: getUser(post.userId),
  comments: getComments(post.id)
}));


export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts}/>
  </section>
);
