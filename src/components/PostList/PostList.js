import React from 'react';
import PropTypes from 'prop-types';
import './PostList.css';

import { Post } from '../Post/Post';

export function PostList({ allPosts }) {
  // console.log(allPosts[0]);

  return (
    <div className="post-list">
      {allPosts.map(post => (
        <Post key={post.id} post={post} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  allPosts: PropTypes.arrayOf(PropTypes.shape).isRequired,
};
