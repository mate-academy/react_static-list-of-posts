import React from 'react';
import PropTypes from 'prop-types';
import { PostsShape } from '../../shapes/PostsShape';
import { Post } from '../Post/Post';

import './PostList.scss';

export const PostList = ({ posts }) => (
  <ul className="postList">
    {
      posts.map(post => (
        <li className="postList__item" key={post.id}>
          <Post {...post} />
        </li>
      ))
    }
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostsShape).isRequired,
};
