import React from 'react';
import PropTypes from 'prop-types';
import { PostType } from './types';
import { Post } from './Post';

export const PostList = ({ posts }) => (
  <section>
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </section>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};
