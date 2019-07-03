import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const PostList = props => (
  <main className="posts-box">
    {props.postsList.map(post => (
      <Post question={post} />
    ))}
  </main>
);

PostList.propTypes = {
  postsList: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
