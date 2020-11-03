/* eslint-disable comma-dangle */
/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import { Comment } from '../Comment';

export const CommentList = ({ comments }) => (
  <>
    <ul className="list-container">
      {comments.map((item) => (
        <li key={item.id} className="list-item">
          <Comment comment={item} />
        </li>
      ))}
    </ul>
  </>
);

CommentList.defaultProps = {
  comments: [],
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      body: PropTypes.string,
      email: PropTypes.string,
    })
  ),
};
