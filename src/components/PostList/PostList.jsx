import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import { Post } from '../Post';

export const PostList = ({ allPosts }) => (
  <div>
    <ul className="postlist">
      {allPosts.map(post => (
        <li className="postlist__item" key={post.id}>
          <Post {...post} />
        </li>
      ))}
    </ul>
  </div>
);

PostList.propTypes = {
  allPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ),
};

PostList.defaultProps = {
  allPosts: [],
};
