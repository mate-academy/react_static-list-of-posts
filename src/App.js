import React from 'react';
import { comments } from './data/comments';
import { posts } from './data/posts';
import { users } from './data/users';
 
import './App.css';
import { PostList } from './components/PostList';

function App() {
  const postsList = posts.map(post => ({
    title: post.title,
    body: post.body,
    user: users.find(user => user.id === post.userId),
    postComments: comments.filter(comment => comment.postId === post.id),
  }));

  return (
    <div>
      <PostList postList={postsList} />
    </div>
  );
}

export default App;
