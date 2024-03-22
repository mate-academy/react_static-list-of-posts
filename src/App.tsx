import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { User } from './types/User';
import { WithId } from './types/WithId';
import { Post } from './types/Post';
import { PostList } from './components/PostList';

function getById<T extends WithId>(array: T[], id: number) {
  return array.find(el => el.id === id) || null;
}

function getPosts() {
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

const posts: Post[] = getPosts();

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>

    <PostList posts={posts} />
  </section>
);
