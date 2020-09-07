import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ postList }) => (
  <div className="post-list">
    {postList.map(post => (
      <div className="post" key={post.id}>
        <Post {...post} />
      </div>
    ))}
  </div>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })),
};

PostList.defaultProps = {
  postList: [],
};
