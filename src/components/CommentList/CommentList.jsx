import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './commentList.scss';

export const CommentList = ({ comment }) => (
  <ul className="comment__list">
    {comment.map(post => (
      <li className="comment__item" key={post.id}>
        <Comment {...post} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comment: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }),
  ).isRequired,
};
