import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ comments }) => {
  const { id } = comments;

  return (
    <ul className="comment__list">
      {comments.map(comment => (
        <li key={id}>
          <Comment {...comment} />
        </li>
      ))}
    </ul>
  );
};

const TypeId = PropTypes.shape({
  id: PropTypes.number.isRequired,
});

CommentList.propTypes = {
  comments: PropTypes.arrayOf(TypeId).isRequired,
};
