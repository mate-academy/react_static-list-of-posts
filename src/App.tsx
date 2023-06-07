import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import { PostList } from './components/PostList';
import { Post } from './types/Post';

const fullPosts: Post[] = postsFromServer.map(post => {
  const user = usersFromServer.find(person => post.userId === person.id);
  const comments = commentsFromServer
    .filter(comment => comment.postId === post.id);

  return {
    ...post,
    user,
    comments,
  };
});

export const App: React.FC = () => (
  <section className="App">
    <h1 className="App__title">
      Static list of posts
    </h1>

    <div className="PostList">
      <PostList posts={fullPosts} />
    </div>
  </section>
);
