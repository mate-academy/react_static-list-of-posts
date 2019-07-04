import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post'

const PostList = ({ post }) => (
  <section>
    <h1 className ="PostList__title"> List of posts </h1>
    {post.map(post => (
      <Post post = {post} />
)
    )}
  </section>
)

PostList.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string,
    body: PropTypes.string,
  }).isRequired
};

export default PostList;
