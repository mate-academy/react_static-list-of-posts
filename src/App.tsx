import React from 'react';
import './App.scss';
import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';
import { PostList } from './components/PostList';

import { Post } from './types/Post';

function findUsers(userId:number) {
  const findUser = usersFromServer.find(user => user.id === userId);

  return findUser || null;
}

function findComments(postId:number) {
  const findComment = commentsFromServer.filter(comment => comment.postId
    === postId);

  return findComment || [];
}

export const App: React.FC = () => {
  const posts:Post [] = postsFromServer.map(post => ({
    ...post,
    user: findUsers(post.userId),
    comments: findComments(post.id),

  }));

  return (
    <section className="App">
      <h1 className="App__title">Static list of posts</h1>

      <div className="PostList">
        <PostList posts={posts} />
      </div>
    </section>
  );
};
