import React from 'react';
import PropTypes from 'prop-types';
import { Comment, commentType } from '../Comment';
import './CommentList.scss';

export const CommentList = ({ comments }) => (
  <div className="commentList">
    {comments.map(comment => (
      <Comment
        key={comment.id}
        name={comment.name}
        body={comment.body}
        email={comment.email}
      />
    ))}
  </div>
);

export const commentsType = PropTypes.shape({
  ...commentType,
  id: PropTypes.number.isRequired,
});

CommentList.propTypes = {
  comments: PropTypes.arrayOf(commentsType).isRequired,
};
