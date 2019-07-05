import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

function PostList(props) {
  const { items } = props;
  return (
    <div className="post-wrap">
      <Post posts={items} />
    </div>
  );
}

PostList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
