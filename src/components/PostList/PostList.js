import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './PostList.scss';

export const PostList = ({ listOfPosts }) => (
  <ol className="List">
    {listOfPosts.map(post => (
      <li className="List_Item" key={post.id}>
        <Post {...post} />
      </li>
    ))}
  </ol>
);

PostList.propTypes = {
  listOfPosts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
