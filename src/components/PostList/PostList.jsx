import React from 'react';
import PropTypes from 'prop-types';
import './PostList.scss';
import { Post } from '../Post/Post';

export const PostList = ({ posts }) => (
  <ul className="postsList">
    {posts.map(post => (
      <li key={post.id} className="postsList__post">
        <Post {...post} />
      </li>
    )) }
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.objectOf(PropTypes.string),
};

PostList.defaultProps = {
  posts: [],
};
