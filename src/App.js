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
        <ul key={x.id} className="Components">
          <h2>{x.title}</h2>
          <li>{x.body}</li>
          <User {...x.users} />
          <Comments {...x.comments} />
        </ul>
      ))}
    </div>
  </div>
);

export default App;
