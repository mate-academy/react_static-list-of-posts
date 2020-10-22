import React from 'react';
import './PostList.scss';
import { Post } from '../Post/Post';
import { PostListShape } from '../propTypes/PostListShape';

export const PostList = ({ posts }) => (
  <section className="posts">
    {posts.map(post => <Post key={post.id} {...post} />)}
  </section>
);

PostList.propTypes = PostListShape;
