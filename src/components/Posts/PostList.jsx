import React from 'react';

import PropTypes from 'prop-types';
import { PostTypes } from '../../types';

import { Post } from './Post';
import './Posts.scss';

export const PostList = ({ posts }) => (
  posts.map(post => (
    <div className="post" key={post.id}>
      <Post
        {...post}
      />
    </div>
  ))
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostTypes).isRequired,
};
