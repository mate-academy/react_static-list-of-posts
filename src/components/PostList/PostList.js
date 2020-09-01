import React from 'react';
import PropTypes from 'prop-types';
import PostItem from '../PostItem';

const PostList = ({ post }) => (
  post.map(item => <PostItem key={item.Id} postItem={item} />)
);

PostList.propTypes = {
  post: PropTypes.arrayOf.isRequired,
};

export default PostList;
