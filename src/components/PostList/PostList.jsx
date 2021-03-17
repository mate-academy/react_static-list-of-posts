import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { PostType } from '../../types';

export const PostList = ({ posts }) => (
  <div>
    <ul className="postList">
      {posts.map(post => (
        <li key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(PostType).isRequired,
  ),
};

PostList.defaultProps = {
  posts: [],
};
