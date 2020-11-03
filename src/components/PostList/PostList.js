/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <>
    <ul className="list-container">
      {posts.map((item) => (
        <li key={item.id} className="list-item">
          <Post post={item} />
        </li>
      ))}
    </ul>
  </>
);

PostList.defaultProps = {
  posts: [],
};

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({ title: PropTypes.string })),
};
