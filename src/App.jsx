import React from 'react';
import PostList from './components/PostList';

export default function App(props) {
  return (
    props.posts.length
      ? <PostList posts={props.posts} users={props.users} comments={props.comments} />
      : 'no posts'
  );
}
