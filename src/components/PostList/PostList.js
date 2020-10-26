import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.scss';
import { PostShape } from '../../shapes/PostShape';

export const PostList = ({ posts }) => (
  <ul className="postList">
    {posts.map(post => (
      <li className="postList__item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};
