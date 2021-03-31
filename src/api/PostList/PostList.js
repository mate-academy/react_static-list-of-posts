import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(a => <li><Post post={a} /></li>)}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf({
    userId: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  }).isRequired,
};
