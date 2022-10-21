import React from 'react';
import { Post } from './types/Post';
import { User } from './types/User';
import { Comment } from './types/Comment';
import { FullPost } from './types/FullPost';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

function getUser(post: Post): User | null {
  const user = usersFromServer.find(person => {
    return person.id === post.userId;
  });

  return  user || null;
}

function getComments(post: Post): Comment[] {
  return commentsFromServer.filter(comment => {
    return comment.postId === post.id;
  });
}

const posts: FullPost[] = postsFromServer.map(post => {
  return {
    ...post,
    user: getUser(post),
    comments: getComments(post),
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">Static list of posts</h1>
    <PostList posts={posts} />
  </section>
);
