import React from 'react';
import PropTypes from 'prop-types';
import './CommentList.scss';
import { Comment } from '../Comment';
import { CommentType } from '../../types';

export const CommentList = ({ comments }) => (
  <ul className="comment__list">
    {comments.map(comment => (
      <li key={comment.id}>
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape(CommentType),
  ).isRequired,
};
