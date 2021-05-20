import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { commentType } from '../../types';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="comment-list">
    {comments.map(comment => (
      <div className="comment-wrap" key={comment.id}>
        <Comment {...comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = PropTypes.arrayOf(commentType).isRequired;
