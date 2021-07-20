import React from 'react';
import PropTypes from 'prop-types';
import { CommentType } from '../../type';
import './Comment.css';

export const Comment = ({ comment }) => (
  <>
    <div className="comment-wrapper">
      <p className="comment-info">
        {`user: ${comment.name}, email: ${comment.email}`}
      </p>
      <p className="comment-info">
        {`comment: ${comment.body}`}
      </p>
    </div>
  </>
);

Comment.propTypes = {
  comment: PropTypes.arrayOf(CommentType).isRequired,
};
