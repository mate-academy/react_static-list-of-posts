import React from 'react';
import propTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './CommentList.scss';

export const CommentList = ({ filteredComments }) => (
  <ul className="comment-wrapper">
    {filteredComments.map(comment => (
      <li className="comment" key={comment.id}>
        <Comment comment={comment} />
      </li>
    ))}
  </ul>
);

CommentList.propTypes = {
  filteredComments: propTypes.arrayOf(
    propTypes.shape({
      postId: propTypes.number.isRequired,
      id: propTypes.number.isRequired,
      name: propTypes.string.isRequired,
      email: propTypes.string.isRequired,
      body: propTypes.string.isRequired,
    }),
  ).isRequired,
};
