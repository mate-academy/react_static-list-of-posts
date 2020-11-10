import React from 'react';
import PropTypes from 'prop-types';
import { PostShape } from '../shapes/PostShape';
import { Post } from '../post/Post';

export const PostList = ({ posts }) => (
  <ul className="postList">
    {posts.map(post => (
      <li className="postList__item">
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};
