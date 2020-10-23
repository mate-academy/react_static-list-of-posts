import React from 'react';
import PropTypes from 'prop-types';
import { CommentPropTypes } from '../propTypes/CommentPropTypes';
import { Comment } from '../Comment/Comment';

export const CommentList = ({ comments }) => (
  <section className="comments">
    <h3>Comments:</h3>
    {comments.map(comment => (
      <Comment {...comment} key={comment.id} />
    ))}
  </section>
);

CommentList.propTypes
  = PropTypes.arrayOf(PropTypes.shape(CommentPropTypes)).isRequired;
