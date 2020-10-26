import React from 'react';
import { Post } from '../Post';
import { PostListShape } from '../Shapes/PostListShape';

import './PostList.scss';

export const PostList = ({ listOfPosts }) => (
  <ul className="PostList">
    {listOfPosts.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </ul>
);

PostList.propTypes = PostListShape;
