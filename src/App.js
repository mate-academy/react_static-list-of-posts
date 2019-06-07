import React from 'react';
import Post from './components/Post';
import { comments } from './resources/comments';
import { users } from './resources/users';
import { posts } from './resources/posts';

function App() {
  const commentMap = {};
  comments.forEach(el => {
    commentMap[el.postId] ? commentMap[el.postId].push(el) : commentMap[el.postId] = [el];
  })

  const usersMap = users.reduce((acc, user) => ({ ...acc, [user.id]: user }), {});

  const postsMap = posts.map(post => ({
    ...post, comments: commentMap[post.id], user: usersMap[post.userId]
  }))

  return (
    <div>{postsMap.map(post => <Post post={post} key={post.id}/>)}</div>
  )
}

export default App;
