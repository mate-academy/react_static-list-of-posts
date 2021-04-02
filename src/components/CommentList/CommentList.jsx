import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentShape } from '../../types';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <ol className="comment-list">
    { comments.map(comment => (
      <li key={comment.id} className="comment-list__item">
        <Comment {...comment} />
      </li>
    ))}
  </ol>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
