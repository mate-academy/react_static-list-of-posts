import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment';
import { CommentShape } from './Shapes/CommentShape';

export const CommentList = ({ comments }) => (
  <div className="App__comment comment">
    {
      comments.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))
    }
  </div>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
}.isRequired;
