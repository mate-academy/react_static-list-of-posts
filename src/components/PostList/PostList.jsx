import React from 'react';
import PropTypes from 'prop-types';

import './PostList.scss';

import Post from '../Post/Post';

const PostList = function({ fPosts }) {
  return (
    <ul className="PostList">
      {fPosts.map(fPost => <Post {...fPost} />)}
    </ul>
  );
};

PostList.propTypes = {
  // eslint-disable-next-line
  fPosts: PropTypes.object.isRequired,
};

export default PostList;
