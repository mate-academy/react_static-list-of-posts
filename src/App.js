import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { PostList } from './components/PostList';

function getAddress(user) {
  const addressKeys = ['street', 'suite', 'city', 'zipcode'];
  const addressFields = addressKeys.map(key => user.address[key]);

  return addressFields.join(', ');
}

const preparedPosts = posts.map((post) => {
  const user = users.find(person => person.id === post.userId);

  const postClone = { ...post };

  postClone.user = {
    username: user.name, email: user.email, address: getAddress(user),
  };

  postClone.comments = comments.filter(comment => comment.postId === post.id);

  return postClone;
});

const App = () => (
  <div className="App">
    <h1 className="title is-1 centered">Static list of posts</h1>

    <p className="subtitle is-3 centered">
      <span>posts: </span>
      {posts.length}
    </p>

    <p className="subtitle is-3 centered">
      <span>comments: </span>
      {comments.length}
    </p>

    <p className="subtitle is-3 centered">
      <span>Users: </span>
      {users.length}
    </p>
    <PostList posts={preparedPosts} />
  </div>
);

export default App;
