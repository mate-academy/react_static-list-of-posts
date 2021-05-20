import React from 'react';
import PropTypes from 'prop-types';

import { Post } from '../Post';

export const PostList = ({ posts }) => (
  <div className="App__PostList">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>

);

const propTypes = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

PostList.propTypes = {
  posts: PropTypes.arrayOf(propTypes).isRequired,
};
