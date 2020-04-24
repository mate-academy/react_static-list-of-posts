import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const PostList = ({ list }) => (
  <div className="posts-container">
    {list.map(
      item => <Post key={item.id} {...item} />
    )}
  </div>
);

PostList.propTypes = { list: PropTypes.arrayOf(PropTypes.object) };

PostList.defaultProps = { list: null };

export default PostList;
