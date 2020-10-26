import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from './Comment';
import { CommentPropTypes } from './propTypes/CommentPropTypes';

import './CommentsList.scss';

export const CommentList = ({ comments }) => (
  <ul className="comments_list">
    {comments.map(comment => (
      <li className="comment" key={comment.id}>
        <Comment {...comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentPropTypes).isRequired,
  ).isRequired,
};
