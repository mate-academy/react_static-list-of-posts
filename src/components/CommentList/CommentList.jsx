import React from 'react';
import PropTypes from 'prop-types';
import { Comment, CommentType } from '../Comment';

export const CommentList = ({ comments }) => (
  <ul className="list-group">
    <h3 className="display-6">Comment List</h3>
    {comments.map(comment => (
      <li className="list-group-item" key={comment.id}>
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
