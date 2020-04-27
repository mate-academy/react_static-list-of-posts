import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const PostList = ({ preparedPosts }) => (
  <ul className="post-list">
    {preparedPosts.map(posts => (
      <Post {...posts} key={posts.id} />
    ))}
  </ul>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};

export default PostList;
