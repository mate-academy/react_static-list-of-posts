import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { PostShape } from '../Shapes';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li className="post" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};
