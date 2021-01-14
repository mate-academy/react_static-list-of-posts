import React from 'react';

import './App.scss';

import postsFromServer from './api/posts';
import commentsFromServer from './api/comments';
import usersFromServer from './api/users';

import PostList from './components/post_list/Postlist';

const preparedPosts = postsFromServer.map(post => ({
  ...post,
  comments: commentsFromServer.filter(comment => (comment.postId === post.id)),
  user: usersFromServer.find(user => (user.id === post.userId)),
}));

const App = () => (
  <div className="App">
    <h1>Static list of posts</h1>
    <span>Posts: </span>
    {postsFromServer.length}
    {', '}
    <span>Comments: </span>
    {commentsFromServer.length}
    {', '}
    <span>Users: </span>
    {usersFromServer.length}

    <PostList posts={preparedPosts} />
  </div>
);

export default App;
