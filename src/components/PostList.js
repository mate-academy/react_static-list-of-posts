import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const PostList = ({ preparedPosts }) => (
  <ul className="post-list">
    {preparedPosts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default PostList;
