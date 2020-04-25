import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ list }) => (
  <>
    {list.map(post => <Post key={post.id} {...post} />)}
  </>
);

PostList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
