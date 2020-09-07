import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './Post';

export const PostList = ({ preparedPosts }) => (
  <div className="container">
    {
      preparedPosts.map(posts => (
        <Post key={posts.id} {...posts} />
      ))
    }
  </div>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
