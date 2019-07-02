import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

console.log(posts);
console.log(comments);
console.log(users);

const postWidthUser = posts.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
  commentary: comments.filter(comment => comment.postId === item.id),
}));
console.log(postWidthUser);

const PostList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li className="comment-section">
        <div className="user-post">
          <Post postItem={item} />
          <User userItem={item} />
        </div>
        <CommentList listItems={item} />
      </li>
    ))}
  </ul>
);

const Post = ({ postItem }) => (
  <div className="post">
    <h3 className="post__title">{postItem.title}</h3>
    <p className="post__body">{postItem.body}</p>
  </div>
);

const User = ({ userItem }) => (
  <div className="user">
    <span className="user__name">{userItem.user.name} </span>
    <span className="user__email">{userItem.user.email} </span>
    <div className="user__adress">
      <span className="user__adress-street">
        {userItem.user.address.street}
      </span>
      <span className="user__adress-street">
        {userItem.user.address.suite}
      </span>
      <span className="user__adress-street">
        {userItem.user.address.city}
      </span>
    </div>
  </div>
);

const CommentList = ({ listItems }) => (
  listItems.commentary.map(item => (<Comment commentItem={item} />)));

const Comment = ({ commentItem }) => (
  <div className="comment">
    <p className="comment__body">{commentItem.body}</p>
    <div className="comment__name-email">
      <span>{commentItem.name}</span>
      <span>{commentItem.email}</span>
    </div>
  </div>
);

const App = () => (
  <div className="App">
    <PostList items={postWidthUser} />
  </div>
);

export default App;
