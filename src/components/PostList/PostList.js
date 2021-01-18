import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

import { PostShape } from '../shapes';

const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <Post
        {...post}
        key={post.id}
      />
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

export default PostList;
