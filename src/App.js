import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

const App = () => {
  const preparedList = posts.map(x => ({
    post: { ...x },
    user: { ...users[x.userId - 1] },
    commentList: comments.filter(c => c.postId === x.id).map(c => ({ ...c })),
  }));

  return (
    <div className="App">

      <h1>Static list of posts</h1>
      <p>
        <span>posts: </span>
        <PostList preparedList={preparedList} />
      </p>

      <p>
        <span>comments: </span>
        {comments.length}
      </p>

      <p>
        <span>Users: </span>
        {users.length}
      </p>
    </div>
  );
};

export default App;
