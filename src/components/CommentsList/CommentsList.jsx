import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentsList.scss';

export const CommentsList = ({ commentsList }) => (
  <ol className="Comments">
    {commentsList.map(comment => (
      <li key={comment.id} className="Comment">
        <Comment
          name={comment.name}
          body={comment.body}
          email={comment.email}
        />
      </li>
    ))}
  </ol>
);

CommentsList.propTypes = {
  commentsList: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
