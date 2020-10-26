import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { CommentShape } from '../shapes/CommentShape';

export const CommentList = ({ comments }) => (
  <ul className="commentList">
    <span className="commentList__header">Comments</span>
    {comments.map(
      comment => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ),
    )}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentShape).isRequired,
};
