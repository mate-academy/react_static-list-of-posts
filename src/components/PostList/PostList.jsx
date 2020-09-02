import React from 'react';
import './PostList.scss';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ list }) => {
  const item = list.map(post => (
    <div key={post.id} className="post">
      <Post post={post} />
    </div>
  ));

  return item;
};

PostList.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
