import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ preparedPosts }) => (
  <>
    {preparedPosts.map(preparedPost => (
      <Post preparedPost={preparedPost} key={preparedPost.id} />
    ))}
  </>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
