import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment/Comment';
import './CommentList.scss';

export const CommentList = ({ responses }) => (
  <ul className="list__comments list-comments">
    <h3 className="list-comments__title">
      Comments:
    </h3>
    {responses.map(comment => <Comment {...comment} key={comment.id} />)}
  </ul>
);

CommentList.propTypes = {
  responses: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
  })).isRequired,
};
