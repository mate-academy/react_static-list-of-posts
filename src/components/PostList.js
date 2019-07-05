import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList({ items }) {
  return (
    <div className="post-wrap">
      {items.map(post => (
        <Post post={post} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
