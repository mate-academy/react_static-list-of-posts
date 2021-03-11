import React from 'react';
import { Comment } from '../Comment';
import PropTypes from 'prop-types';
import { CommentType } from '../../types';

export const CommentList = ({ comments }) => (
  <>
    {comments.map(comment => (
      <div key={comment.id}>
        <Comment comment={comment}/>
      </div>
    ))}
  </>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentType)
};

CommentList.defaultProps = {
  comments: [],
};
