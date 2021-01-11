import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

import './PostList.scss';

export function PostList({ objPosts }) {
  return (
    <div className="PostList">
      {objPosts.map(post => (
        <Post
          className="Post"
          key={post.id}
          {...post}
        />
      ))}
    </div>
  );
}

PostList.propTypes = {
  objPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};
