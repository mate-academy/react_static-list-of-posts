import React from 'react';
import './post.scss';
import PropTypes from 'prop-types';
import { Post } from '../Post';

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
  })).isRequired,
};
