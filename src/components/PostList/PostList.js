import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post/Post';
import { postTypes } from '../../types';

export const PostList = ({ posts }) => (
  <div>
    {
      posts.map(post => (
        <Post key={post.id} {...post} />
      ))
    }
  </div>
);

PostList.propTypes = PropTypes.arrayOf(postTypes.isRequired).isRequired;
