import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { TypesPostList } from '../../types';

export function PostList({ postList }) {
  return (
    <ul>
      {postList.map(post => (
        <li key={post.id}>
          <Post postElement={post} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  postList: PropTypes.arrayOf(TypesPostList).isRequired,
};
