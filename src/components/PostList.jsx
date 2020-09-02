import React from 'react';

import PropTypes from 'prop-types';

import { Post } from './Post';

export const PostList = ({ posts }) => (
  <div className="PostList">
    {posts.map(objOfPost => <Post {...objOfPost} key={objOfPost.id} />)}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(
    PropTypes.object,
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};
