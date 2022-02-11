import React from 'react';

import './App.scss';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import { Post, User, Comment } from './types';

const preparedPosts = [...posts].map((post: Post) => {
  const postCopy: Post = { ...post };

  postCopy.user = users
    .find((user: User) => user.id === postCopy.userId);

  postCopy.comments = comments
    .filter((comment: Comment) => comment.postId === postCopy.userId);

  return postCopy;
});

type PostProp = {
  props: Post[],
};

type UserProp = {
  user: User;
};

type CommentProps = {
  postComments: Comment[];
};

function randomDate(start: Date, end: Date) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

const UserInfo: React.FC<UserProp> = ({ user }) => {
  return (
    <div key={user.id} className="user">
      <div>{user.name}</div>
      <div>{user.email}</div>
    </div>
  );
};

const CommentInfo: React.FC<CommentProps> = ({ postComments }) => {
  return (
    postComments.map((comment: Comment) => (
      <div key={comment.id} className="comment">
        <h3>{comment.name}</h3>
        <p>{randomDate(new Date(2010, 0, 1), new Date()).toDateString()}</p>
        <p>{comment.body}</p>
      </div>
    ))
  );
};

const PostInfo: React.FC<PostProp> = ({ props }) => {
  return (
    props.map((prop: Post) => (
      <div key={prop.id} className="post">
        <h2>{prop.title}</h2>
        {prop.user && <UserInfo user={prop.user} />}
        <div>{prop.body}</div>
        {prop.comments && <CommentInfo postComments={prop.comments} />}
      </div>
    ))
  );
};

const App: React.FC = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <PostInfo props={preparedPosts} />
  </div>
);

export default App;
