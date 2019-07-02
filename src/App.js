import React from 'react';
import './App.css';
import {users} from "./data/users";
import {posts} from "./data/posts";
import {comments} from "./data/comments";
import PostList from './components/PostList'

function App() {
  const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

  const commentsMap = comments.reduce((acc, comment) => {
    acc[comment.postId] = [...acc[comment.postId] || [], comment];
    return acc;
  }, {});

  return (
    <PostList
        users={usersMap}
        posts={posts}
        comments={commentsMap}
    />
  );
}

export default App;
