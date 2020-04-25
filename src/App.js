import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const resultArr = posts.map(post => ({
  ...post,
  user: users.find(user => user.id === post.userId),
}));

const resultArrComments = resultArr.map(post => ({
  ...post,
  comments: comments.filter(comment => comment.postId === post.id),
}));
// console.log(resultArrComments);

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

    <PostList posts={resultArrComments} />

  </div>
);

function PostList({ posts }) {
  console.log(posts);

  return (
    <>

      {posts.map(post => <Post {...post} key={post.id} />)}
    </>
  );
}

function Post({ title, body, user, comments }) {
  return (
    <>
      <h5>{title}</h5>
      <span>{body}</span>
      <User {...user} />
      <CommentList comments={comments} />
    </>
  );
}

function User({ name, email, address }) {

console.log(address);
  return (
    <>
      <h2>{name}</h2>
      <h2>{email}</h2>
      <h1>{address.street}</h1>
    </>
  );
}

function CommentList({ comments }) {
// console.log(comments);
  return (
    <>
      {comments.map(comment => <Comment comments={comment} key={comment.id} />)}
    </>
  );
}

function Comment({ comments }) {
  return (
    <>
      <p>{comments.body}</p>
      <p>{comments.email}</p>
      <p>{comments.name}</p>
    </>
  );
}

export default App;
