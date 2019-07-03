import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

import Post from './components/Post';
import User from './components/User';
import Comment from './components/Comment'

const postWidthUser = posts.map(item => ({
  ...item,
  user: users.find(user => user.id === item.userId),
  comments: comments.filter(comment => comment.postId === item.id),
}));

const CommentList = ({ listItems }) => (
  listItems.comments.map(item => <Comment commentItem={item} />)
);

const PostList = ({ items }) => (
  <ul>
    {items.map(item => (
      <li className="post_section">
        <div className="user-post">
          <Post postItem={item} />
          <User userItem={item} />
        </div>
        <p className="comment_tab">Comment:</p>
        <CommentList listItems={item} />
      </li>
    ))}
  </ul>
);

const App = () => (
  <div className="App">
    <h1 className="title_page">Static list of posts</h1>
    <PostList items={postWidthUser} />
  </div>
);

export default App;
