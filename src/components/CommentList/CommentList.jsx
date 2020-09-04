import React from 'react';
import PropTypes from 'prop-types';

import { Comment } from '../Comment';

import './CommentList.css';

export const CommentList = ({ comments }) => (
  <ul className="commentList">
    {
      comments.map(comment => (
        <li key={comment.id}>
          <Comment {...comment} />
        </li>
      ))
    }
  </ul>
);

CommentList.defaultProps = {
  comments: [],
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.object),
};
