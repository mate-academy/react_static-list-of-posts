import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../post';

import './PostList.scss';

export const PostList = ({ postsBlocks }) => (
  <div className="posts__list">
    {postsBlocks.map(postBlock =>
      <Post {...postBlock} key={postBlock.id} />
    )}
  </div>
);

PostList.propTypes = {
  postsBlocks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  )
}
