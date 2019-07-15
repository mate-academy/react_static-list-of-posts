import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const PostList = ({ allPosts }) => (
  <ul className="postlist">
    {allPosts.map(post => (
      <li className="postlist__post" key={post.id}>
        <Post post={post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  allPosts: PropTypes.arrayOf(PropTypes.shape({
    userId: PropTypes.number,
    id: PropTypes.number,
    title: PropTypes.string,
    body: PropTypes.string,
  })).isRequired,
};

export default PostList;
