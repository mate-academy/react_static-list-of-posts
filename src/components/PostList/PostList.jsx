import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostType } from '../Types';

export const PostList = ({ posts }) => (
  <div>
    {
      posts.map(post => (
        <Post {...post} key={post.id} />
      ))
    }
  </div>

);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostType).isRequired,
};
