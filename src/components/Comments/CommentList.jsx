import React from 'react';

import PropTypes from 'prop-types';
import { CommentTypes } from '../../types';

import { Comment } from './Comment';

import './Comments.scss';

export const CommentList = ({ comments }) => (
  <>
    <h3>Comments</h3>
    <div className="comments">
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </div>
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentTypes).isRequired,
};
