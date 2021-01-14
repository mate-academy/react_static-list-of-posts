import React from 'react';
import Post from './Post';
import { PostType } from '../types';

const PostList = ({ infoList }) => (
  <div>
    {infoList.map(info => (
      <div key={info.id} className="post">
        <Post {...info} />
      </div>
    ))}
  </div>
);

PostList.propTypes = PostType.isRequired;

export default PostList;
