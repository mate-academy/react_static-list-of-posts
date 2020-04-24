import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ preparedPosts }) => (
  <ul className="list">
    {preparedPosts.map(preparedPost => (
      <li className="list__userInfo" key={preparedPost.id}>
        <Post {...preparedPost} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  preparedPosts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
