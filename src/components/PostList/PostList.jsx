import React from 'react';
import { Post } from '../Post'
import PropTypes from 'prop-types';
import { PostType } from '../../types'

export const PostList = ({ posts }) => (
  <>
    {posts.map(post => (
      <div key={post.id}>
        <Post post={post}/>
      </div>
    ))}
  </>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};
