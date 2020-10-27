import React from 'react';
import PropTypes from 'prop-types';
import { Post } from './Post';
import { postShape } from '../shapes/postShape';

export const PostList = ({ posts }) => (
  <div className="post">
    {posts.map(post => (
      <Post {...post} key={post.id} />
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(postShape).isRequired,
};
