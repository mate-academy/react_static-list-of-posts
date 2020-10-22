import React from 'react';
import PropTypes from 'prop-types';

import { Post } from './Post';
import { PostTypes } from './PropTypes/PostTypes';

export const PostList = ({ posts }) => (
  <section className="container">
    <div className="row">
      {
        posts.map(post => (
          <Post key={post.id} {...post} />
        ))
      }
    </div>
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.shape(PostTypes),
  ).isRequired,
};
