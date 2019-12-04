import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post';

const PostList = ({ posts }) => (
  <div>
    {posts.map(currentPost => (
      <Post post={currentPost} key={currentPost.id} />
    ))}
  </div>
);

PostList.propTypes
  = { posts: PropTypes.oneOfType([PropTypes.array]).isRequired };

export default PostList;
