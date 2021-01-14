import React from 'react';
import PropTypes from 'prop-types';

import Post from '../Post/Post';

import { PostShape } from '../shapes';

const PostList = ({ posts }) => (
  <section>
    {posts.map(post => (
      <Post
        {...post}
        key={post.id}
      />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};

export default PostList;
