import PropTypes from 'prop-types';
import React from 'react';
import { Comment } from '../Comment/Comment';
import { CommentType } from '../../types';
import './CommentList.css';

export const CommentList = ({ comments }) => (
  <ul>
    {comments.map(comment => (
      <li className="comment" key={comment.id}>
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
