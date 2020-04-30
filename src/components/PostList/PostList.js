import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';
import './PostList.css';

const PostList = ({ list }) => (
  <div key="PostList" className="post list">
    {list.map(post => (
      <Post key={post.id} {...post} />
    ))}
  </div>
);

export default PostList;

PostList.propTypes = PropTypes.arrayOf({}).isRequired;
