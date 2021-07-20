import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import { typesPostList } from '../../types';

export function PostList({ postList }) {
  return (
    <ul>
      {postList.map(el => (
        <li key={el.id}>
          <Post postElement={el} />
        </li>
      ))}
    </ul>
  );
}

PostList.propTypes = {
  postList: PropTypes.arrayOf(typesPostList).isRequired,
};
