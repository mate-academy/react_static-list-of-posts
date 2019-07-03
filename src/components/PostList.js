import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const PostList = ({ allPosts }) => (
  <ul className="postlist">
    {allPosts.map(item => (
      <li className="postlist__post">
        <Post post={item} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  allPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
