import React from 'react';

import './App.css';

import posts from './api/posts';
import comments from './api/comments';
import users from './api/users';
import PostList from './components/PostList';

const App = () => (
  <div className="App">
    <h1 className="ui center aligned header">
      Static list of posts
    </h1>
    <PostList posts={preparedPosts} />
  </div>
);

const getPreparedPosts = (postList, usersArr, commentsArr) => (
  postList.map((post) => {
    const user = usersArr.find(person => person.id === post.userId);
    const commentList = commentsArr
      .filter(comment => comment.postId === post.id);

    return { ...post, user, commentList };
  })
);

const preparedPosts = getPreparedPosts(posts, users, comments);

export default App;
