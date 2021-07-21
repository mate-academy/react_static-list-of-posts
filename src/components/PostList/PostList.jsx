import React from 'react';
import './PostList.scss';

import { Post } from '../Post';
import { postListPropTypes } from '../TypesOfProp';

export const PostList = ({ posts }) => (
  <div className="postList">
    {posts.map(post => (
      <div className="post" key={post.id}>
        <Post post={post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = postListPropTypes;
