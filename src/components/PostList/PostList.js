import React from 'react';
import posts from '../../api/posts';
import Post from '../Post/Post';
import './PostList.css';

const PostList = () => (
  <section className="post-list">
    <h1 className="post-list__title">Static list of posts</h1>
    <Post posts={posts} />
  </section>
);

export default PostList;
