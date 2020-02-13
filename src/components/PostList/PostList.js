import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';

import './PostList.css';

export const PostList = ({ postList }) => (
  <ul className="PostsWrapper">
    {postList.map(post => <Post key={post.id} {...post} />)}
  </ul>
);

PostList.propTypes = {
  postList: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
      user: PropTypes.shape({
        name: PropTypes.string.isRequired,
        email: PropTypes.string.isRequired,
        address: PropTypes.shape({
          city: PropTypes.string.isRequired,
        }).isRequired,
      }).isRequired,
      comments: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          body: PropTypes.string.isRequired,
          email: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }),
  ).isRequired,
};
