import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';

import './postList.scss';

const PostList = ({ posts }) => (
  <div className="post-list">
    {posts.map(post => <Post post={post} key={post.id} />)}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    user: PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      address: PropTypes.shape({
        street: PropTypes.string.isRequired,
        suite: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
    allComment: PropTypes.arrayOf(PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired,
    })).isRequired,
  })).isRequired,
};

export { PostList };
