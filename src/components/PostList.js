import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ preparedPosts }) => (
  <ul>
    {preparedPosts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
    })).isRequired,
    comments: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export default PostList;
