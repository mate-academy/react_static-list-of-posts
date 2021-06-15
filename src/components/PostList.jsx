import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './Post';

export const PostList = ({ actualPosts }) => (
  <>
    {actualPosts.map(post => (
      <div key={post.id}>
        <Post post={post} />
      </div>
    ))}
  </>
);

PostList.propTypes = {
  actualPosts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired).isRequired,
};
