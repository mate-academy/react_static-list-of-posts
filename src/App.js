import React from 'react';
import './App.css';
import PostList from './components/PostList';
import { posts } from './posts';
import { users } from './users';
import { comments } from './comments';

function App() {
  const modifiedPosts = posts.map(post => {
    return {
      title: post.title,
      body: post.body,
      userInfo: users.find(user => {
        return user.id === post.userId;
      }),
      comments: comments.filter(comment => {
        return comment.postId === post.id;
      })
    };
  });

  return (
    <div>
      <PostList postsInfo={modifiedPosts} />
    </div>
  );
}

export default App;
