import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentShape } from '../../types';
import './CommentList.scss';

export const CommentList = ({ comment }) => (
  <ol className="comment-list">
    { comment.map(commen => (
      <li key={commen.id} className="comment-list__item">
        <Comment {...commen} />
      </li>
    ))}
  </ol>
);

CommentList.propTypes = {
  comment: PropTypes.arrayOf(CommentShape).isRequired,
};
