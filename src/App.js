import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList/PostList';

const PostsWhithUser = posts.map(post => (
  {
    ...post,
    user: users.find(person => person.id === post.userId),
    comments: comments.filter(comment => post.id === comment.postId),
  }
));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    {
      PostsWhithUser.map(post => (
        <PostList
          title={post.title}
          body={post.body}
          user={post.user}
          comments={post.comments}
        />
      ))
    }
  </div>
);

export default App;
