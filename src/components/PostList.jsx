import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';
import { PostType } from '../types';

const PostList = ({ posts }) => (
  <div>
    {posts.map(post => (
      <div key={post.id} className="post">
        <Post {...post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = PropTypes.arrayOf(PostType).isRequired;

export default PostList;
