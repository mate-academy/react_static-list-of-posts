import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ preparedPosts }) => (
  <ul className="list">
    {preparedPosts.map(preparedPost => (
      <Post {...preparedPost} key={preparedPost.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
