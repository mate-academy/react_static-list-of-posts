import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.scss';

export function PostList({ postsData }) {
  return (
    <div className="post-list">
      {postsData.map(post => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

PostList.propTypes = {
  postsData: PropTypes.arrayOf(PropTypes.shape(Post.propTypes)).isRequired,
};
