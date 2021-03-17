import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';
import './CommentsList.scss';

export const CommentsList = ({ comments }) => (
  <ol className="Comments">
    {comments.map(comment => (
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
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
  })).isRequired,
};
