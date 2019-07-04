import React from 'react';
import PropTypes from 'prop-types';

import Post from './Post';

const PostList = ({ post }) => (
  <div className="post">
    {post.map(posts => <Post postOfList={posts} />)}
  </div>
);

PostList.propTypes = {
  post: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PostList;
