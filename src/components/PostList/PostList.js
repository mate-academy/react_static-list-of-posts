import React from 'react';
import PropTypes from 'prop-types';
import { ShapePost } from '../Shapes/ShapePost';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <div className="post__list">
    {posts.map(post => (
      <>
        <Post key={post.id} {...post} />
        <hr />
      </>
    ))}
  </div>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(ShapePost).isRequired,
};
