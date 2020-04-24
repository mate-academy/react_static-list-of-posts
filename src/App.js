import React from 'react';
import { PostList } from './components/PostList/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => {
  const preparedPosts = posts.map(post => ({
    ...post,
    user: users.find(user => user.id === post.userId),
    comments: comments.filter(comment => comment.postId === post.id),
  }));

  return (
    <main className="app">
      <div className="app__header">
        <h1 className="app__heading">Static list of posts</h1>
        <span className="app__info">
          Users:
          {' '}
          {users.length}
        </span>
        <span className="app__info">
          Posts:
          {' '}
          {posts.length}
        </span>
        <span className="app__info">
          Comments:
          {' '}
          {comments.length}
        </span>
      </div>
      <article className="app__post-list">
        <PostList posts={preparedPosts} />
      </article>
    </main>
  );
};

export default App;
