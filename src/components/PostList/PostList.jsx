import React from 'react';

import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ preparedPosts }) => (
  <div className="listPost" key="">
    {preparedPosts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  preparedPosts: PropTypes.shape.isRequired,
};
