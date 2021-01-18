import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import { PostShape } from '../../types';

export const PostList = ({ posts }) => (
  <ul>
    {posts.map(post => (
      <li className="App__list" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  posts: PropTypes.arrayOf(PostShape).isRequired,
};
