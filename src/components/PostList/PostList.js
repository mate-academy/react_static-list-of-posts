import React from 'react';
import { Post } from '../Post';
import { PostListShape } from '../../shapes/PostListShape';
import './PostList.scss';

export const PostList = ({ postList }) => (
  <ul className="postList">
    {postList.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </ul>
);

PostList.propTypes = PostListShape;
