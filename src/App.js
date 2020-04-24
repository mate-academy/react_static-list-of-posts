import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPosts = posts.map((post) => {
  const user = users.find(curUser => curUser.id === post.userId);
  // eslint-disable-next-line max-len
  const userComments = comments.filter(curComent => (curComent.postId === post.id));

  return {
    ...post,
    user: {
      id: user.id,
      name: user.name,
      email: user.email,
      address: user.address,
    },
    userComments,
  };
});

const App = () => (
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
    <div className="container">
      {preparedPosts.map(post => (
        <div className="post" key="post.id">
          <h2 className="post__title">
            {post.title}
          </h2>
          <p className="post__body">
            {post.body}
          </p>

          <div className="post__user user">
            <p>{post.user.name}</p>
            <p>{post.user.email}</p>
            <p>{post.user.address.city}</p>
            <p>{post.user.address.street}</p>
            <p>{post.user.address.suite}</p>
          </div>
          <div className="post__coments coments">
            {post.userComments.map(comment => (
              <div key={comment.id} className="comment">
                <p>{comment.name}</p>
                <p>{comment.body}</p>
                <p>{comment.email}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default App;
