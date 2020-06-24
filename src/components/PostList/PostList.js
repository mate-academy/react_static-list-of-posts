import React from 'react';
import PropTypes from 'prop-types';
import { Post, postShape } from '../Post/Post';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <Post key={post.id} {...post} />
  )));

export const postListShape = PropTypes.shape({
  posts: PropTypes.arrayOf(postShape).isRequired,
});

PostList.propTypes = { ...postListShape };
