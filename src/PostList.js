import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ fullPosts }) => (
  <div>
    {fullPosts
      .map(currentPost => <Post post={currentPost} key={currentPost.id} />)}
  </div>
);

PostList.propTypes
  = { fullPosts: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default PostList;
