import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { TypeComments } from '../../types';

export const CommentsList = ({ comments }) => (
  <>
    <h3>Comments:</h3>

    <ol>
      {comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))}
    </ol>

    <br />
  </>
);

CommentsList.propTypes = {
  comments: PropTypes.arrayOf(TypeComments).isRequired,
};
