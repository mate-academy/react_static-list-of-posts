import React from 'react';
import PropTypes from 'prop-types';

import { TypeComment } from '../../types';

import { Comment } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ userComments }) => (
  <div className="comment-section">
    {userComments.map(comment => (
      <div key={comment.id} className="comment-section__single">
        <Comment comment={comment} />
      </div>
    ))}
  </div>
);

CommentList.propTypes = {
  userComments: PropTypes.arrayOf(TypeComment).isRequired,
};
