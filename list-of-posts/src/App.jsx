import React  from 'react';
import { posts, users, comments } from './components/data';
import PostList from './components/PostList';

export default function App(){
  return <PostList users={users} comments={comments} posts={posts} />
};


