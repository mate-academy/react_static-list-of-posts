import React from 'react';
import PropTypes from 'prop-types';
import { Post } from '../Post';
import './postlist.scss';

export const PostList = ({ props }) => (
  <ul className="list">
    {props.map(prop => (
      <li key={prop.id} className="list__item">
        <Post {...prop} />
      </li>
    ))}
  </ul>
);

PostList.propTypes = {
  props: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
