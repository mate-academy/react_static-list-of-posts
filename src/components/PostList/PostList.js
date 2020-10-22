import React from 'react';
import PropTypes from 'prop-types';
import Post from '../Post/Post';

const PostList = ({ posts }) => (
  posts.map(post => (
    <Post post={post} key={post.id} />
  ))
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    comments: PropTypes.array.isRequired,
    user: PropTypes.object.isRequired,
  })).isRequired,
};

export default PostList;
