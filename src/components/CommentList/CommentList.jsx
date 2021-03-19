import React from 'react';
import './CommentList.scss';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import { CommentType } from '../../types';

export const CommentList = ({ comments }) => (
  <ul className="commentList">
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
    PropTypes.shape(CommentType).isRequired,
  ).isRequired,
};
