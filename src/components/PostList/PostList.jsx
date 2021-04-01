import React from 'react';
import PropTypes from 'prop-types';
import { postShape } from '../../types';
import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <>
    {
      posts.map(
        post => <Post key={post.id} post={post} />,
      )
    }
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    postShape.isRequired,
  ).isRequired,
};
