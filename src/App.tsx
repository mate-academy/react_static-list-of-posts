import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { User } from './types/User';
import { Post } from './types/Post';
import { IDGenericFunc } from './types/IDGenericFunc';
import { PostList } from './components/PostList';

function getById<T extends IDGenericFunc>(array: T[], id: number) {
  return array.find(element => element.id === id) || null;
}

function getPostList() {
  const posts = postsFromServer.map(post => ({
    ...post,
    user: getById<User>(usersFromServer, post.userId),
    comments: [],
  }));

  commentsFromServer.forEach(comment => {
    const post = getById<Post>(posts, comment.postId);
    const resultComment = {
      ...comment,
      post,
    };

    post?.comments.push(resultComment);
  });

  return posts;
}

const postList: Post[] = getPostList();

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={postList} />
  </section>
);
