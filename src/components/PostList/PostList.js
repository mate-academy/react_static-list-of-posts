import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post/Post';
import './PostList.scss';

export const PostList = ({ pablications }) => (
  <ul className="list">
    {pablications.map(post => <Post pablication={post} key={post.id} />)}
  </ul>
);

// const postListType = PropTypes.shape({
//   body: PropTypes.string.isRequired,
//   comments: PropTypes.array.isRequired,
//   id: PropTypes.string.isRequired,
//   title: PropTypes.string.isRequired,
//   user: PropTypes.string.isRequired,
//   userId: PropTypes.string.isRequired,
// });

PostList.propTypes = {
  pablications: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
