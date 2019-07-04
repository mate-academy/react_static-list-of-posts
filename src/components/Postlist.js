import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = props => (
  <>
    {props.posts.map(post => (
      <Post post={post} />
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
    PropTypes.object])).isRequired,
};

export default PostList;
