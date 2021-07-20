import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import { CommentsTypes } from '../../types/commentsTypes';

export const CommentList = ({ comments }) => (
  <ul className="commentList">
    {comments.map(comment => (
      <li className="commentList__card" key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(CommentsTypes).isRequired,
};
