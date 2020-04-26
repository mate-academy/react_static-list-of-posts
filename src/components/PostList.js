import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ preparedPosts }) => (
  <ul className="post post__list">
    {preparedPosts.map(post => (
      <Post post={post} key={post.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
