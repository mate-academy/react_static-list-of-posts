import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from './Comment/Comment';
import { CommentShape } from './Shapes/CommentShape';

export const CommentList = ({ commentList }) => (
  <ul className="App__comments">
    {
      commentList.map(comment => (
        <Comment {...comment} key={comment.id} />
      ))
    }
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
}.isRequired;
