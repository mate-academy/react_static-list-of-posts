import React from 'react';
import Post from './Post';

const PostList = ({ info }) => (
  info.map(post => (
    <section className="post shadow">
      <Post data={post} />
    </section>
  ))
);

export default PostList;
