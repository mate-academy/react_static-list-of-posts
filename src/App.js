import React from 'react';

import { PostList } from './components/PostList';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const App = () => {
  const content = posts.reduce((acc, cur) => {
    const author = users.find(user => user.id === cur.userId);
    const postComments = comments.filter(comment => comment.postId === cur.id);

    return [
      ...acc,
      {
        ...cur,
        author,
        postComments,
      },
    ];
  }, []);

  return (
    <div className="App">
      <h1>Static list of posts</h1>

      <p>
        <span>posts: </span>
        {posts.length}
      </p>

      <p>
        <span>comments: </span>
        {comments.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
      <PostList content={content} />
    </div>
  );
};

export default App;
