import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { PostShape } from '../shapes/PostShape';
import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="post-list">
    {
      posts.map(post => (
        <li className="post-list__item">
          <Post {...post} key={post.id} />
        </li>
      ))
    }
  </ul>
);

PostList.propTypes = PropTypes.shape({
  posts: PropTypes.arrayOf(PostShape).isRequired,
}).isRequired;
