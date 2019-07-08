import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const PostList = ({ items }) => (
  <div className="post">
    {items.map(post => <Post post={post} />)}
  </div>
);

PostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
