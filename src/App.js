import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const preparedPostsList = posts.map(post => ({
  post,
  user: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <ListOfPosts postsList={preparedPostsList} />
  </div>
);

const ListOfPosts = props => (
  <div>
    {props.postsList.map(post => <PostItem postItem={post} />)}
  </div>
);

const PostItem = props => (
  <div className="post">
    <h2>{props.postItem.post.title}</h2>
    <p>{props.postItem.post.body}</p>
    <User user={props.postItem.user} />
    <div>
      <h3>Comments:</h3>
      {props.postItem.comments.map(comment => <Comment comment={comment} />)}
    </div>
  </div>
);

const User = props => (
  <div className="user">
    <span>{props.user.name}</span>
    <span>{props.user.email}</span>
  </div>
);

const Comment = props => (
  <div className="comment">
    <p>{props.comment.body}</p>
    <span>{props.comment.name}</span>
    <span>{props.comment.email}</span>
  </div>
);

export default App;
