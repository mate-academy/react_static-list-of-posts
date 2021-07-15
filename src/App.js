import React from 'react';

import './App.scss';
import { User } from './components/User/User';

import { Comments } from './components/Comments/Comments';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';

const postList = posts.map(post => ({
  ...post,
  users: users.find(user => user.id === post.userId),
  comments: comments.filter(comment => comment.postId === post.id),
}));

const App = () => (
  <div className="App">
    <h1 className="App__title">Static list of posts</h1>
    <div>
      {postList.map(x => (
        <div className="Components">
          <h2 key={x.title}>{x.title}</h2>
          <p key={x.body}>{x.body}</p>
          <User key={x.User} {...x.users} />
          <Comments key={x.comments} {...x.comments} />
        </div>
      ))}
    </div>
  </div>
);

export default App;
